/** app/api/uploadthing/core.ts */
import { decodeJwt } from "@clerk/nextjs/dist/api";
import { getUserByClerkId } from "@lib/mongo/users";
import { createUploadthing, type FileRouter } from "uploadthing/next";
const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f
    // Set permissions and file types for this FileRoute
    .fileTypes(["image"])
    .maxSize("1MB")
    .middleware(async (req) => {
      // This code runs on your server before upload
      const user = await auth(req);
      const jwt = req.headers.get("cookie")?.split("=").at(-1);
      const clerk_id = decodeJwt(jwt!).payload.sub;
      // If you throw, the user will not be able to upload
      if (!user) throw new Error("Unauthorized");
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id, clerk: clerk_id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log(file.url);
      console.log("Upload complete for:", metadata.clerk);
      const res = await getUserByClerkId(metadata.clerk);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

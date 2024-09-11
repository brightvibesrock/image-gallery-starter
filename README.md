# Next.js & Cloudinary Photo Gallery App

This example shows how to create an image gallery site using Next.js, [Cloudinary](https://cloudinary.com), and [Tailwind](https://tailwindcss.com).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or view the demo [here](https://nextconf-images.vercel.app/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-cloudinary&project-name=nextjs-image-gallery&repository-name=with-cloudinary&env=NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET,CLOUDINARY_FOLDER&envDescription=API%20Keys%20from%20Cloudinary%20needed%20to%20run%20this%20application.)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Clone template and update env.local

git clone https://github.com/sufyan-ashraf/nextjs-image-gallery-with-cloudinary.git
- Rename env.local.example to env.local
- Navigate to Cloudinary to get your account details or create an account
- If you have a new account, upload photos to your media library root
- Update your cloudinary Cloud_Name, API_Key and API_Secret in env.local

## How to use

#### [yarn](https://yarnpkg.com/lang/en/docs/cli/create/)
#### yarn build
If you have issues with yarn build, delete the .next and node_modules folders. You may also need to delete the *.lock files if you get error messages as well. Reinstall packages, check that the .next, node_modules folders are put back and rebuild the app.
- brew install node
- pnpm i nextjs
- pnpm i cloudinary
- yarn build
  
#### yarn start dev or yarn start

You can opt to use [npm](https://docs.npmjs.com/cli/init), or [pnpm](https://pnpm.io) 
- View dev app in http://localhost:3000
- Manipulate index.tsx to customize your layout and text. Note that its pretty finicky. If you are not familiar with nextjs or tailwind, recommend you to go slowly with your changes. You can inspect this repo to see what changes I made from the template. 

## References

- Cloudinary API: https://cloudinary.com/documentation/transformation_reference

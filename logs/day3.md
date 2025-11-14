# Day 3

### Theory

caching
- data can be reused istead of refetched or rebuilt
- Browser cache, sever cache, data cache
- 'use cache'
- Pre-renders it at build time
- stores it in memory
- Revalidates it automatically
- Fine tune cache: cacheLife() -> controls for how long data stays chached -> when to clear
- cacheTag('my-data'): to group data for easier invalidation -> what to clear
- revalidate() or revalidateTag -> to refresh const instantly

Build Adapters API(alpha): create custom adaptors to modify the build process.
- Adapter: act as bridge that teaches Next how to build for different environments
- Adapters can modify your Next.js config
- optimize the final build output
- adjust how your app runs

Search Engine Optimization (SEO):
- look and feel of the website when we share it on any social media platforms or internet in general.
- config based - js object in the layout or any kind of page file and export it. next js will automatically detect it and will convert it into relevant metatags for those routes.
- generateMetadata({ params }): to generate dynamic metadata.
- Fle based metadata: images, icons, graphs, etc can be put directly in the app folder and next.js will automaticallt generate coresponding metatags.

### Tasks performed

- 
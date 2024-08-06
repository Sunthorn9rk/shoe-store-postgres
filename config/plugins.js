module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
        timeout: 60000, // เพิ่ม timeout เป็น 60 วินาที
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});

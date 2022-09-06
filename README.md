## This repository has been deprecated.  Please refer to [Studio Sample App](https://github.com/livepeer/studio-sample-app).


# (Deprecated) Livepeer.com API Demo

This is a demo app to showcase how to use Livepeer.com APIs to create a live stream. The app enables the user to create a stream and play it back.

**Note: To start a video stream, please use a broadcaster software like OBS/Streamyard on desktop, or Larix on mobile**

The demo app uses POST [/stream](https://livepeer.com/docs/guides/api/create-a-stream) endpoint to create a new stream.

For more information on the API and the endpoints availble, please check the [Livepeer.com API documentation](https://livepeer.com/docs/guides).

**Note: You will need an API Key to use this application**

### Steps to acquire an API key:

- Sign up/ Log in to Livepeer.com
- On the dashboad click on API Keys tab
- Click on "Create" to create an API Key

You can enter this API key in the demo app.

### Tech note:

This app uses NextJS api routes to communicate with the Livepeer.com API. Checkout `pages/api/stream` directory for the relevant code.

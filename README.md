[![example-mern-application](https://github.com/koyeb/example-mern-application/actions/workflows/deploy.yaml/badge.svg)](https://github.com/koyeb/example-mern-application/actions)

<div align="center">
  <a href="https://koyeb.com">
    <img src="https://www.koyeb.com/static/images/icons/koyeb.svg" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Koyeb Serverless Platform</h3>
  <p align="center">
    Deploy a MERN application using MongoDB Atlas, Express, and React on Koyeb
    <br />
    <a href="https://koyeb.com">Learn more about Koyeb</a>
    ·
    <a href="https://koyeb.com/docs">Explore the documentation</a>
    ·
    <a href="https://koyeb.com/tutorials">Discover our tutorials</a>
  </p>
</div>


## About Koyeb and the example MERN application using MongoDB Atlas, Express, and React

Koyeb is a developer-friendly serverless platform to deploy apps globally. No-ops, servers, or infrastructure management.
This repository contains a MERN blog clone you can deploy on the Koyeb serverless platform for testing.

This example application is designed to show how an application using MongoDB Atlas, Express, and React can be deployed on Koyeb.

## Getting Started

Follow the steps below to deploy and run the MERN application with MongoDB Atlas on your Koyeb account.

### Requirements

You need a Koyeb account to successfully deploy and run this application. If you don't already have an account, you can sign-up for free [here](https://app.koyeb.com/auth/signup).

### Deploy using the Koyeb button

The fastest way to deploy the MERN application is to click the **Deploy to Koyeb** button below.

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com%2Fkoyeb%2Fexample-mern-application&branch=main&builder=buildpack&build_command=yarn%20build-client&run_command=yarn%20start&env[CONNECTION_STRING]=&ports[3000]=&name=mern-on-koyeb)

Clicking on this button brings you to the Koyeb App creation page with everything pre-set to launch this application.

_To modify this application example, you will need to fork this repository. Checkout the [fork and deploy](#fork-and-deploy-to-koyeb) instructions._

### Fork and deploy to Koyeb

If you want to customize and enhance this application, you need to fork this repository.

If you used the **Deploy to Koyeb** button, you can simply link your service to your forked repository to be able to push changes.
Alternatively, you can manually create the application as described below.

On the [Koyeb Control Panel](https://app.koyeb.com/), on the **Overview** tab, click the **Create Web Service** button to begin.

1. Choose **GitHub** as the deployment method.
2. Select the git repository where you pushed the code to.
3. Expand the **Builder** section and click the **override** toggle associated with the **Build command**.  In the field, enter `yarn build-client`.  Enable the **Run command** field and enter `yarn start`.
4. In the **Environment variables** section, click the **Add variable** button to create a variable called `CONNECTION_STRING` set to the connection string provided by Mongo Atlas.
5. In the **Exposed ports** section, enter the port **3000**.
6. Choose a name for your App and Service and click **Deploy**.

You land on the deployment page where you can follow the build of your application. Once the build is completed, your application is being deployed and you will be able to access it via `<YOUR_APP_NAME>-<YOUR_ORG_NAME>.koyeb.app`.

## Contributing

If you have any questions, ideas or suggestions regarding this application sample, feel free to open an [issue](https://github.com/koyeb/example-mern-application/issues) or fork this repository and open a [pull request](https://github.com/koyeb/example-mern-application/pulls).

## Contact

[Koyeb](https://www.koyeb.com) - [@gokoyeb](https://twitter.com/gokoyeb) - [Slack](http://slack.koyeb.com/)

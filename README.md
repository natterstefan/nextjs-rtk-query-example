# nextjs-rtk-query-example

[![Node CI](https://github.com/natterstefan/nextjs-rtk-query-example/actions/workflows/ci.yml/badge.svg)](https://github.com/natterstefan/nextjs-rtk-query-example/actions/workflows/ci.yml)
[![GitHub issues](https://img.shields.io/github/issues/natterstefan/nextjs-rtk-query-example)](https://github.com/natterstefan/nextjs-rtk-query-example/issues)
[![GitHub stars](https://img.shields.io/github/stars/natterstefan/nextjs-rtk-query-example)](https://github.com/natterstefan/nextjs-rtk-query-example/stargazers)
[![GitHub license](https://img.shields.io/github/license/natterstefan/nextjs-rtk-query-example)](https://github.com/natterstefan/nextjs-rtk-query-example/blob/main/LICENSE)
[![nextjs](https://img.shields.io/badge/nextjs-built%20with%20typescript-informational.svg?logo=typescript&logoWidth=20)](https://github.com/natterstefan/nextjs-rtk-query-example)

Next.js with rtk-query example.

## Installation & Setup

```bash
yarn
```

Once the task is completed you can start the app with `yarn dev`.

## Start

```bash
# development mode
yarn dev

# production mode
yarn build
yarn start
```

## Development

### Tests & Code Style

```bash
yarn test
yarn lint
```

## Deployment

### Deploy your own

Deploy `nextjs-rtk-query-example` using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/natterstefan/nextjs-rtk-query-example)

### Docker

`nextjs-rtk-query-example` also provides a Docker Image (see [docker](./docker)) and
docker-compose setup.

#### Build Docker Image

```bash
./gradlew buildDockerImage
```

#### Run Docker Image

```bash
./gradlew runDockerBuild
```

Or when you want to run it in the background:

```bash
docker-compose --env-file ./.env.local up -d
```

## License

[MIT](./LICENSE)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
  <td align="center"><a href="https://github.com/barnabasJ"><img src="https://avatars.githubusercontent.com/u/11669837?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Barnabas Jovanovics</b></sub></a><br /><a href="#ideas-barnabasJ" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://natterstefan.me/"><img src="https://avatars.githubusercontent.com/u/1043668?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stefan Natter</b></sub></a><br /><a href="#ideas-natterstefan" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

---

_Based on the <https://github.com/natterstefan/nextjs-template> template._

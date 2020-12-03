# Game News Server

A project created Node + Strapi + MySQL on backend.
The main porpouse of this project is to create posts on the server and display it on front-end.

<p align="center">
    <img src="https://github.com/gabrielsxp/games-news/blob/master/gif.gif" alt="Pay me Dude Landing"></img> 
</p>

## Features
- A special route on server to populate data from [Gamespot](https://gamespot.com).
- All extracted images are uploaded to [Cloudinary](https://cloudinary) to not overload the server with image requests.
- A complete feed with posts
- Search Posts
- Complete commentary section for each post using [Disqus](https://disqus.com)
- Individual post page with complete SEO using NEXT SEO.
- Customizable social links
- Share a post on social media
- Side sections with latest posts
- Newsletter [Under constuction]

## Installation

```bash
yarn install
```

## Usage

Configure the Strapi variables on .env file on the root of the server folder

```bash
GAMESPOT_KEY=xxx
GAMESPOT_URL=xxx
CLOUDINARY_NAME=xxx
CLOUDINARY_KEY=Xxx
CLOUDINARY_SECRET=xxx
```

```bash
yarn develop
```

To run this project on development mode.

To run it on production, execute

```bash
yarn build
yarn start
```

## Cloudinary

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

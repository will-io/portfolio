## Setup Notes

1. All components ready to go (including imports)
2. Use main.css - less imports
3. Limit amount of components - better overview
4. React Icons

[react icons] :https://react-icons.github.io/react-icons/

```javascript
import { FaHome } from "react-icons/fa"
const Component = () => {
  return <FaHome className="icon"></FaHome>
}
```


```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```
## for the GraphQL playground:
## http://localhost:8000/__graphql?query=


import { Helmet } from "react-helmet-async"

//Used for search engine optimization.
export default function SEO({title, description, name, type}){
    return(
        <Helmet>
            { /* General tags */ }
            <title>{title}</title>
            <meta name="description" content={description} />

            { /* Facebook tags */ }
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />


            { /* Twitter tags */ }
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    )
}
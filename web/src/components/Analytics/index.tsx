import React from 'react'

const UAANALYTICS = process.env.ANALYTICS_UA

const Analytics = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${UAANALYTICS}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${UAANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
      }}
    />
  </>
)

export default Analytics

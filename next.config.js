module.exports = {
    // 外部ドメインを使用
    images: {
        remotePatterns: [
            {
                // protocol: 'https',
                hostname: 'books.google.com',
                // port: '',
                // pathname: '/account123/**',
            },
            {
                hostname: 'cdn.pixabay.com',
            },
            {
                hostname: 's3.us-west-2.amazonaws.com',
            },
        ]
    },
}
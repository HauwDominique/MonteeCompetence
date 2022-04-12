const postsContainer = document.querySelector('.posts');
const posts = [
    {
        title : 'SEO, les bonnes pratiques',
        hashtag : '#SEO',
        extract : 'Lorem ipsum dolor sit amet. Est adipisci minus et voluptas voluptatem qui numquam laboriosam. Et modi nihil quo aliquam doloribus aut neque omnis qui Quis harum. Aut perferendis iste et saepe quia est illo internos est voluptatem sunt ea consequatur facere et similique consequuntur.'
    },
    {
        title : 'Bien débuter en référencement',
        hashtag : '#référencement',
        extract : 'Lorem ipsum dolor sit amet. Est adipisci minus et voluptas voluptatem qui numquam laboriosam. Et modi nihil quo aliquam doloribus aut neque omnis qui Quis harum. Aut perferendis iste et saepe quia est illo internos est voluptatem sunt ea consequatur facere et similique consequuntur.'
    },
    {
        title : 'Content marketing  les bons arguments',
        hashtag : '#contentmarketing',
        extract : 'Lorem ipsum dolor sit amet. Est adipisci minus et voluptas voluptatem qui numquam laboriosam. Et modi nihil quo aliquam doloribus aut neque omnis qui Quis harum. Aut perferendis iste et saepe quia est illo internos est voluptatem sunt ea consequatur facere et similique consequuntur.'
    },
    {
        title : 'Another title',
        hashtag : '#anotherTitle',
        extract : 'Lorem ipsum dolor sit amet. Est adipisci minus et voluptas voluptatem qui numquam laboriosam. Et modi nihil quo aliquam doloribus aut neque omnis qui Quis harum. Aut perferendis iste et saepe quia est illo internos est voluptatem sunt ea consequatur facere et similique consequuntur.'
    }
];

posts.forEach(post => {
    //création d'un template string(association d'éléments HTML et de variables)

    const article = `
                <div class="post">
                    <div class="post-title">${post.title}</div>
                    <div class="post-extract">${post.extract}</div>
                    <div class="post-seo">${post.hashtag}</div>
                </div>
                `;

    postsContainer.innerHTML += article;
});


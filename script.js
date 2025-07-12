document.addEventListener('DOMContentLoaded', () => {
    // 1. 作品数据定义
    // 请确保 audioUrl 路径与你的实际文件路径一致
    const artworks = [
        { id: 1, title: '《希望之光》', composer: '张三', audioUrl: 'audio/masterpiece1.mp3', description: '一首充满力量与希望的交响乐。' },
        { id: 2, title: '《夏日私语》', composer: '李四', audioUrl: 'audio/amazing_tune.mp3', description: '轻柔的旋律，带你回到悠长的夏日午后。' },
        { id: 3, title: '《山川回响》', composer: '王五', audioUrl: 'audio/mountain_echo.mp3', description: '灵感来源于壮丽山河，气势磅礴。' },
        { id: 4, title: '《都市霓虹》', composer: '赵六', audioUrl: 'audio/city_lights.mp3', description: '快节奏的电子乐，描绘都市夜晚的璀璨。' },
        { id: 5, title: '《雨中漫步》', composer: '钱七', audioUrl: 'audio/rainy_walk.mp3', description: '钢琴与小提琴的对话，细述雨天的诗意。' },
        // TODO: 在这里添加更多参赛作品
        // 示例： { id: 6, title: '《新作品名》', composer: '新作曲家', audioUrl: 'audio/new_song.mp3', description: '作品描述。' },
    ];

    const artworkListContainer = document.getElementById('artwork-list');

    // 2. 随机打乱数组的函数 (Fisher-Yates 洗牌算法)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // ES6 数组解构赋值，交换元素
        }
    }

    // 3. 动态生成并展示作品
    function displayArtworks(artworksToDisplay) {
        // 清空加载信息或其他旧内容
        artworkListContainer.innerHTML = ''; 

        if (artworksToDisplay.length === 0) {
            artworkListContainer.innerHTML = '<p class="loading-message">暂无作品可展示。</p>';
            return;
        }

        artworksToDisplay.forEach(artwork => {
            const artworkElement = document.createElement('div');
            artworkElement.classList.add('artwork-item'); // 添加 CSS 类名

            artworkElement.innerHTML = `
                <h3>${artwork.title}</h3>
                <p>作曲家: ${artwork.composer}</p>
                <p>${artwork.description}</p>
                <audio controls preload="none">
                    <source src="${artwork.audioUrl}" type="audio/mpeg">
                    您的浏览器不支持音频播放。
                </audio>
            `;
            artworkListContainer.appendChild(artworkElement);
        });
    }

    // 页面加载时执行：
    // 1. 打乱作品数组
    shuffleArray(artworks);
    // 2. 显示作品
    displayArtworks(artworks);
});
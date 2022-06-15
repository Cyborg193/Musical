const player = require("../client/player");

module.exports = {
    name: "queue",
    description: "Oynatılan ŞArkıyı Veya Sıradaki Şarkı Hakkında Bilgi Verir.",
    options:[],
    run: async (client, interaction) => {
        const queue = player.getQueue(interaction.guildId);
        if (!queue?.playing)
            return interaction.reply({
                content: "Oynatılan Şarkı Bulunamadı",
            });

        const progress = queue.createProgressBar();
        const perc = queue.getPlayerTimestamp();

        return interaction.reply({
            embeds: [
                {
                    title: "Oynatılan Şarkı",
                    description: `🎶 | **${queue.current.title}**! (\`${perc.progress}%\`)`,
                    fields: [
                        {
                            name: "\u200b",
                            value: progress,
                        },
                    ],
                    color: "BLUE",
                    footer: {
                        text: `Kuyuruğa Eklenen Şarkı ${queue.current.requestedBy.tag}`,
                    },
                },
            ],
        });
    },
};

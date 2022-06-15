const { QueryType } = require("discord-player");
const player = require("../client/player");

module.exports = {
    name: "play",
    description: "Şarkı Oynatır Veya Sıraya Şarkı Ekler",
    options: [
        {
            name: "şarkıadı",
            description: "Şarkı Ekler",
            type: 3,
            required: true,
        },
    ],
    run: async (client, interaction) => {
        const songTitle = interaction.options.getString("şarkıadı");

        if (!interaction.member.voice.channel)
            return interaction.reply({
                content: "Komutu Kullanmak İçin Önce Bir Ses Kanalına Katılın.",
            });

        const searchResult = await player.search(songTitle, {
            requestedBy: interaction.user,
            searchEngine: QueryType.AUTO,
        });

        const queue = await player.createQueue(interaction.guild, {
            metadata: interaction.channel,
        });

        if (!queue.connection)
            await queue.connect(interaction.member.voice.channel);

        interaction.reply({ content: `Şuanda Oynatılan: **${songTitle}**` });

        searchResult.playlist
            ? queue.addTracks(searchResult.tracks)
            : queue.addTrack(searchResult.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};

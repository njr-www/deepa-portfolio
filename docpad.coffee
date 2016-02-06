module.exports = {
    outPath: '.build/out'
    templateData:
        site:
            title: "Deepa's Portfolio"
        getPreparedTitle: -> if @document.title \
                             then "#{@document.title} | #{@site.title}" \
                             else @site.title
    collections:
            projects: ->
                @getCollection('html').findAllLive(url: $startsWith: '/projects')
}

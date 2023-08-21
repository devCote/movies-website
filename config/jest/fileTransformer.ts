const path = require('path')

module.exports = {
    process(_sourceText: string, sourcePath: string, _options: any) {
        return {
            code: `module.exports = ${JSON.stringify(
                path.basename(sourcePath)
            )};`,
        }
    },
}

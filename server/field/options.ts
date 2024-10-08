export function getOptionList(type: string): string {
    switch (type) {
        case 'text':
            return JSON.stringify({
                unique: false,
                emptyok: true
            }, null, 2)
        case 'richtext':
            return JSON.stringify({})
        case 'singlerel':
            return JSON.stringify({
                relation: {
                    object: 'myobj1'
                }
            }, null, 2)
        case 'multirel':
            return JSON.stringify({
                relation: {
                    object: 'myobj1'
                },
                type: 'simple'
            }, null, 2)
    }
    return '{}'
}
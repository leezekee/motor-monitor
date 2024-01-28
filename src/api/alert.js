const datas = []

for (let i = 1; i <= 150; i += 3) {
    datas.push({
        id: i,
        date: '2024-01-28',
        level: '一级',
        detail: '报警详情.......'
    })
    datas.push({
        id: i + 1,
        date: '2024-01-28',
        level: '二级',
        detail: '报警详情.......'
    })
    datas.push({
        id: i + 2,
        date: '2024-01-28',
        level: '三级',
        detail: '报警详情.......'
    })
}

const response = {
    code: 200,
    data: {
        total: 150,
        page: 20,
        items: datas
    },
    msg: 'success'

}

const alertApi = {
    getRecords: () => { 
        return new Promise((resolve, reject) => {
            resolve(response)
        })
    }
}

export default alertApi
const equipments = [
    {
        id: 1,
        name: '设备1',
        status: 1,
        // 随机uuid
        uuid: 'fa863a6b-4aa8-430a-ac44-10bbad101c67'
    },
    {
        id: 2,
        name: '设备2',
        status: 1,
        uuid: '27e0ab5d-d5c3-41b6-9e22-0973ba408a59'
    },
    {
        id: 3,
        name: '设备3',
        status: 0,
        uuid: 'dd561d51-1bf0-4002-bd63-f6c7aeb7a5e1'
    },
    {
        id: 4,
        name: '设备4',
        status: -1,
        uuid: 'e748298b-4249-4d2a-94ea-1d236d86a7de'
    },
]


const equipmentApi = {
    getEquipmentList: () => {
        return new Promise((resolve, reject) => {
            resolve(equipments)
        })
    },
    getEquipmentByUuid: (uuid) => {
        return new Promise((resolve, reject) => {
            resolve(equipments.filter(equipment => equipment.uuid === uuid)[0])
        })
    }
}

export default equipmentApi
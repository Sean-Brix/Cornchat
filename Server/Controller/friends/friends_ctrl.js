
export async function getFriendList(req, res, next){
    res.status(200).json({
        list: [
            {name: "Sean"},
            {name: "Franz"},
            {name: "Ethel"},
            {name: "Rhenzy"}
        ]
    })
}
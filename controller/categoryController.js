exports.getAllCategories = (req, res) => {
res.status(200).json({
    status: "success",
    data: [
        {
            id:1,
            name: "Appetizers"
        },
        {
            id:2,
            name: "Main Courses"}
    ]
});
}

exports.storeCategory = (req, res) => {
    let name = req.body.name;
    let description = req.body.description;

    if (!name && !description) {
        return res.status(400).json({
            status: "failed",
            messege: "Name and description are required"
        });
    }

    return res.status(201).json({
        status: "success",
        data: {
            name: name,
            description: description
        }
    });
}
import BlogData from "../Model/BlogModel";
const blogs = [];
class BlogController {

    //deleting one blog

    static deleteOneBlog = (req, res) => {

        const id = req.params.id;

        const dataIndex = blogs.findIndex(blog => blog.id == id);
        
        
        if (dataIndex === -1) {
            return res.status(401).json({
                status: 401,
                message: "id not exist",


            })
        }


        blogs.splice(dataIndex,1);


        return res.status(200).json({
            status: 200,
            message: "deleted successfully",
            


        })
    }

    
static updateDataBlog=(req,res)=>{
    const id =parseInt (req.params.id);
    let {
        title,
        content,
        Userid,
    } = req.body;
    const timestamp= new Date(Date.now());
    const blog = new BlogData(id, title, content, timestamp, Userid);
    const isDataExist=blogs.findIndex((blog)=>blog.id===id)



    if (isDataExist === -1) {

        return res.status(417).json({
            status: 417,
            error: "update  not successiful"

        })
    }
     

blogs.splice(isDataExist,1,blog)
const data = blogs.find(b => b.id===id)
return res.status(201).json({
    status: 201,
    massage: "update is successiful",
    data

})
}

//getting one blog

    static getOneBlog = (req, res) => {
        const id = req.params.id;
        const data = blogs.find(blog => blog.id == id);


        if (!data) {

            return res.status(401).json({
                status: 401,
                message: "the blog isn't exist ",


            })
        }
        return res.status(200).json({
            status: 200,
            message: "this is one blog ",
            data


        })
    }
    //getting all blog
    static getAllBlogs = (req, res) => {
        const data = blogs

        return res.status(200).json({
            status: 200,
            message: "this is blogs",
            data

        });
    }
    static createBlogs = (req, res) => {
        const id = blogs.length + 1;
        let {
            title,
            content,
            timestamp,
            Userid,
        } = req.body

        const blog = new BlogData(id, title, content, timestamp, Userid);
        blogs.push(blog);

        const data = blogs.find(b => b.id === id)
        if (!data) {

            return res.status(417).json({
                status: 417,
                error: "blog post not registered"

            })

        }
        return res.status(201).json({
            status: 201,
            massage: "blog post is registered",
            data

        })
    }
}



export default BlogController;


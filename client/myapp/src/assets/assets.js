import logo from "../assets/logo.svg";
import gradientBackground from "../assets/gradientBackground.png";
import user_group from "../assets/user_group.png";
import star_icon from "../assets/star_icon.svg";
import star_dull_icon from "../assets/star_dull_icon.svg";
import profile_img_1 from "../assets/profile_img_1.png";
import arrow_icon from "../assets/arrow_icon.svg";
import { SquarePen, Hash, Image, Eraser, Scissors, FileText } from 'lucide-react'
import ai_gen_img_1 from "../assets/ai_gen_img_1.png";
import ai_gen_img_2 from "../assets/ai_gen_img_2.png";
import ai_gen_img_3 from "../assets/ai_gen_img_3.png";

export const assets = {
    logo,
    gradientBackground,
    user_group,
    star_icon,
    star_dull_icon,
    profile_img_1,
    arrow_icon,
};
export const AiToolsData = [
    {
        title: 'AI Article Writer',
        description: 'Quickly generate engaging and well-structured articles on any topic using AI.',
        Icon: SquarePen,
        bg: { from: '#3588F2', to: '#0BB0D7' },
        path: '/ai/write-article'
    },
    {
        title: 'Blog Title Generator',
        description: 'Create attention-grabbing and relevant titles for your blog posts effortlessly.',
        Icon: Hash,
        bg: { from: '#B153EA', to: '#E549A3' },
        path: '/ai/blog-titles'
    },
    {
        title: 'AI Image Generation',
        description: 'Design eye-catching images and visuals in seconds with AI-powered image creation.',
        Icon: Image,
        bg: { from: '#20C363', to: '#11B97E' },
        path: '/ai/generate-images'
    },
    {
        title: 'Background Removal',
        description: 'Easily remove or replace image backgrounds with AI precision and speed.',
        Icon: Eraser,
        bg: { from: '#F76C1C', to: '#F04A3C' },
        path: '/ai/remove-background'
    },
    {
        title: 'Object Removal',
        description: 'Seamlessly erase unwanted objects from photos using our AI tool.',
        Icon: Scissors,
        bg: { from: '#5C6AF1', to: '#427DF5' },
        path: '/ai/remove-object'
    },
    {
        title: 'Resume Reviewer',
        description: 'Get AI feedback on your resume to optimize it for better job opportunities.',
        Icon: FileText,
        bg: { from: '#12B7AC', to: '#08B6CE' },
        path: '/ai/review-resume'
    }
]


export const dummyTestimonialData = [
    {
        image: assets.profile_img_1,
        name: 'John Doe',
        title: 'Marketing Director, TechCorp',
        content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
        rating: 4,
    },
    {
        image: assets.profile_img_1,
        name: 'Jane Smith',
        title: 'Content Creator, TechCorp',
        content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
        rating: 5,
    },
    {
        image: assets.profile_img_1,
        name: 'David Lee',
        title: 'Content Writer, TechCorp',
        content: 'ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
        rating: 4,
    },
]


export const dummyCreationData = [
    {
        "id": 9,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Generate a blog title for the keyword blog in the category Technology.",
        "content": "Here are a few blog title options for a technology blog, playing with different angles:\n\n**General & Broad:**\n\n*   The Tech Blog: News, Reviews, and Insights\n*   Technology Today: Your Daily Dose of Tech\n*   The Future is Now: Exploring the World of Technology\n*   Tech Talk: Unpacking the Latest Innovations\n\n**More Specific & Intriguing:**\n\n*   Decoding Tech: Making Sense of the Digital World\n*   Beyond the Gadgets: The",
        "type": "blog-title",
        "publish": false,
        "likes": [],
        "created_at": "2025-12-22T11:09:50.492Z",
        "updated_at": "2026-01-01T11:09:50.492Z"
    },
    {
        "id": 8,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Generate a blog title for the keyword blog in the category General.",
        "content": "Here are a few blog title options for a blog about blogs in the General category, ranging from straightforward to a bit more creative:\n\n**Straightforward:**\n\n*   The Blog Blog: Everything You Need to Know About Blogging\n*   Blogging Insights: Tips, Tricks, and Trends\n*   Your Guide to the World of Blogging\n\n**More Creative:**\n\n*   Beyond the Post: Exploring the Art of Blogging\n*   Blogosphere Unlocked: Navigating the World of Online Writing",
        "type": "blog-title",
        "publish": false,
        "likes": [],
        "created_at": "2025-12-12T11:08:10.450Z",
        "updated_at": "2026-01-01T11:08:10.450Z"
    },
    {
        "id": 7,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Write an article about AI With Coding in Short (500-800 word).",
        "content": "## The Rise of AI in Everyday Coding\n\nArtificial intelligence (AI) is no longer a distant concept; it has become an essential part of modern software development. Coders and developers now leverage AI tools to automate mundane tasks, analyze large datasets, and generate efficient code.\n\n**How AI Supports Developers**\n\n* **Code Suggestions:** AI-powered assistants like GitHub Copilot suggest code snippets and autocomplete entire functions, helping developers write faster.\n* **Debugging and Testing:** AI can detect potential bugs and optimize test coverage automatically, saving time and reducing errors.\n* **Learning and Skill Development:** AI-driven tutorials adapt to the user's skill level, making it easier for beginners to learn coding concepts.\n\n**The Future of AI in Coding**\n\nAI is transforming coding from a purely manual task into a collaborative process between human intelligence and machine learning. Developers can focus on creative problem-solving while AI handles repetitive, time-consuming tasks. As AI continues to advance, the synergy between coders and intelligent systems will become central to innovation in software development.\n\n**Conclusion**\n\nAI and coding are increasingly intertwined. By embracing AI tools, developers can enhance productivity, improve code quality, and accelerate innovation. Understanding and leveraging this partnership is crucial for anyone looking to thrive in the future of technology.",
        "type": "article",
        "publish": false,
        "likes": [],
        "created_at": "2025-12-27T11:07:51.312Z",
        "updated_at": "2026-01-01T11:07:51.312Z"
    }
]


export const dummyPublishedCreationData = [
    {
        "id": 1,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Generate an image of A Boy is on Boat , and fishing in the style Anime style.",
        "content": ai_gen_img_1,
        "type": "image",
        "publish": true,
        "likes": [
            "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
            "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
        ],
        "created_at": "2025-06-19T09:02:25.035Z",
        "updated_at": "2025-06-19T09:58:37.552Z",
    },
    {
        "id": 2,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Generate an image of A Boy Riding a bicycle on road and bicycle is from year 2201  in the style Anime style.",
        "content": ai_gen_img_2,
        "type": "image",
        "publish": true,
        "likes": [
            "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
            "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
        ],
        "created_at": "2025-06-19T08:16:54.614Z",
        "updated_at": "2025-06-19T09:58:40.072Z",
    },
    {
        "id": 3,
        "user_id": "user_2yaW5EHzeDfQbXdAJWYFnZo2bje",
        "prompt": "Generate an image of a boy riding a car on sky in the style Realistic.",
        "content": ai_gen_img_3,
        "type": "image",
        "publish": true,
        "likes": [
            "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
        ],
        "created_at": "2025-06-23T11:29:23.351Z",
        "updated_at": "2025-06-23T11:29:44.434Z",
        "__v": 1
    },
]
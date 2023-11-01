import PropTypes from 'prop-types';

const Blogs = ({ blog }) => {
    const { picture, title, category, description } = blog;
    return (
        
                    <div className=" h-auto overflow-hidden transition-shadow duration-300 bg-white shadow-sm rounded-xl">
                        <img
                            src={picture}
                            className="object-cover w-full h-64"
                            alt=""
                        />
                        <div className="p-5 border border-t-0">
                            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                    aria-label="Category"
                                    title="traveling"
                                >
                                    traveling
                                </a>
                                <span className="text-gray-600">— 28 Dec 2020</span>
                            </p>
                            <a
                                href="/"
                                aria-label="Category"
                                title="Visit the East"
                                className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                {title}
                            </a>
                            <p className="mb-2 text-gray-700">
                                {description}
                            </p>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                               {category}
                            </a>
                        </div>
                    </div>


                
    );
};
Blogs.propTypes = {
    blog: PropTypes.object
}
export default Blogs;
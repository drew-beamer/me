import utilStyles from "../styles/utils.module.css";
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';

export default function BlogFeed({ postData }) {
    return <ul className={utilStyles.list}>
        {postData.map(({ id, date, title, readTime, postImage }) => (
            <li className={utilStyles.listItem} key={id}>
                <div className={utilStyles.blogPostContainer}>
                    <div className={utilStyles.blogPostImage}>
                        <Image src={postImage} fill style={{ borderRadius: "10px" }} />
                    </div>
                    <div className={utilStyles.blogPostInformation}>
                        <Link className={utilStyles.link} href={`/posts/${id}`}>{title}</Link>
                        <br />
                        <small className={utilStyles.lightText} style={{ display: "flex", fontSize: "0.75rem" }}>
                            <p style={{ margin: 0 }}><Date dateString={date} />{" | "}{Math.ceil(readTime)} Minute Read</p>
                        </small>
                    </div>

                </div>
            </li>
        ))}
    </ul>
}
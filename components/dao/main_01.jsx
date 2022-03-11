import aboutus from "../../public/aboutus.json";

export default function Main01() {
    return <div className="bg-white rounded-lg w-full px-12 py-8 mb-12 min-h-50" >
        <article className="prose prose-lg">
            <h2>Our Mission</h2>
            <p>{aboutus.Mission}</p>
            <h2>Our Values</h2>
            <p>{aboutus.Values}</p>
        </article>
    </div>
}

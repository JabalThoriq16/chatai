// import { useState } from "react";
// import { Configuration, OpenAIApi } from "openai";
// import styles from "../index.css";


// function Home() {
//   const configuration = new Configuration({
//     apiKey: "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",
//   });

//   const openai = new OpenAIApi(configuration);
//   const [jawaban, setJawaban] = useState("");
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function onSubmit(event) {
//     event.preventDefault();
//     try {
//       setLoading(true); // menampilkan loading saat melakukan permintaan API
//       const completion = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: jawaban,
//         temperature: 0,
//         max_tokens: 200,
//         top_p: 1.0,
//         frequency_penalty: 0.0,
//         presence_penalty: 0.0,
//       });
//       setResult(completion.data.choices[0].text);
//       setLoading(false); // menghilangkan loading setelah permintaan selesai


//     } catch (error) {
//       console.error(`Error with OpenAI API request: ${error.message}`);
//       setResult(
//         "Terjadi kesalahan saat mengakses OpenAI API. Silakan coba lagi nanti."
//       );
//       setLoading(false);
//     }
//   }

//   return (
//     <div>
//       <div className="head">
//         <title id="title">OpenAI Quickstart</title>
//         <link rel="icon" href="/dog.png" />
//       </div>

//       <main className={styles.main}>
//         <img src="/dog.png" className={styles.icon} />
//         <h3 id="head">Mari bertanya</h3>
//         <form id="form" onSubmit={onSubmit}>
//           <textarea id="textarea"
//             name="jawaban"
//             placeholder="Apa yang ingin anda ketahui"
//             value={jawaban}
//             onChange={(e) => setJawaban(e.target.value)}
//           />
//           <input id="input" type="submit" value="Saya ingin tahu" />
//         </form>
//         {loading ? (
//           <div className={styles.loading}>
//             {/* <BeatLoader css={override} size={10} color={"#ffffff"} /> */}
//             <p id="p">Sedang memuat...</p>
//           </div>
//         ) : (
//           <div className={styles.result}>{result}</div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default Home;

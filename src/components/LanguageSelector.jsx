const LANGUAGES = {
    "Acehnese (Arabic script)": "ace_Arab",
    "Acehnese (Latin script)": "ace_Latn",
    "Afrikaans": "afr_Latn",
    "Akan": "aka_Latn",
    "Amharic": "amh_Ethi",
    "Armenian": "hye_Armn",
    "Assamese": "asm_Beng",
    "Asturian": "ast_Latn",
    "Awadhi": "awa_Deva",
    "English": "eng_Latn",
    "Chinese (Simplified)": "zho_Hans"
}
export default function LanguageSelector({ 
    type, defaultLanguage, onChange 
}) {
    

    return (
        <div className="language-selector">
            <label>{type}:</label>
            <select onChange={onChange} defaultValue={defaultLanguage}>
            {
                Object.entries(LANGUAGES).map(([key, value]) => {
                    return <option key={key} value={value}>{key}</option>
                })
            }
            </select>
        </div>
    )
}
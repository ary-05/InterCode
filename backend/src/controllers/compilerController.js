const PISTON_API = process.env.PISTON_API_URL;

const LANGUAGE_VERSIONS = {
  cpp: { language: "cpp", version: "10.2.0" },
  java: { language: "java", version: "15.0.2" },
  python: { language: "python", version: "3.10.0" },
  javascript: { language: "javascript", version: "18.15.0" },
};

const executeCode = async (req, res) => {
  const { language, code } = req.body;
  const languageConfig = LANGUAGE_VERSIONS[language];

  if (!languageConfig) {
    return res.status(400).json({
      success: false,
      error: `Unsupported language: ${language}`,
    });
  }

  try {
    const response = await fetch(`${PISTON_API}/execute`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: languageConfig.language,
        version: languageConfig.version,
        files: [{ name: `main.${getFileExtension(language)}`, content: code }],
      }),
    });

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        error: `HTTP error! status: ${response.status}`,
      });
    }

    const data = await response.json();
    const output = data.run?.output || "";
    const stderr = data.run?.stderr || data.compile?.stderr || "";

    if (stderr) {
      return res.json({ success: false, output, error: stderr });
    }

    return res.json({ success: true, output: output || "No output" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Failed to execute code: ${error.message}`,
    });
  }
};

function getFileExtension(language) {
  const extensions = { cpp: "cpp", java: "java", python: "py", javascript: "js" };
  return extensions[language] || "txt";
}

export { executeCode };
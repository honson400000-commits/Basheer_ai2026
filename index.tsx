export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "white", padding: 24, textAlign: "center", fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 40, fontWeight: 900 }}>⚖️ البشير للمحاماة AI</h1>
      <p style={{ opacity: 0.7, marginTop: 8 }}>نظام الذكاء القانوني - مكة المكرمة</p>
      
      <div style={{ marginTop: 32, background: "#1a1a1a", padding: 20, borderRadius: 16, maxWidth: 600, margin: "32px auto", border: "1px solid #333" }}>
        <textarea 
          placeholder="اكتب تفاصيل قضيتك هنا..."
          style={{ width: "100%", height: 140, background: "#000", color: "white", border: "1px solid #333", borderRadius: 12, padding: 14, fontSize: 16 }}
        />
        <button style={{ marginTop: 16, width: "100%", background: "white", color: "black", padding: 14, borderRadius: 12, fontWeight: 800, fontSize: 16, border: "none", cursor: "pointer" }}>
          تحليل القضية بالذكاء الاصطناعي
        </button>
      </div>
    </div>
  );
}

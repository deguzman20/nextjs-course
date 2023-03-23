export default function handler(req, res) {
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid value" });
      return;
    }

    console.log({ email, name, text });
    const newComment = {
      id: new Date().toLocaleString(),
    };

    res.status(200).json({ message: "Added comment", comment: newComment });
  }
  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Andy", text: "First comment" },
      { id: "c2", name: "De Guzman", text: "Second comment" },
    ];

    res.status(200).json({ comments: dummyList });
  }
}

import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Tum alanlarin doldurulmasi gerekiyor");
      return;
    }

    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });

      toast.success("Not basariyla olusturuldu");
      navigate("/");
    } catch (error) {
      console.log("Olusturulurken Hata", error);
      if (error.response?.status === 429) {
        toast.error("Yavasla! Cok hizli olusturmaya calisiyorsun", {
          duration: 4000,
          icon: "💀",
        });
      } else if (error.response?.status === 400) {
        toast.error("Gecersiz veri! Tum alanlar doldurulmali");
      } else {
        toast.error("Not olusturulurken hata olustu");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-a">
            <ArrowLeftIcon className="size-5" />
            Notlara geri don.
          </Link>

          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl">Yeni not olustur</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Başlık</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Not Başlık"
                    className="input input-bordered"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">İçerik</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32"
                    placeholder="Notunuzu buraya yazınız..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}>
                    {loading ? "Olusturuluyor..." : "Not Olustur"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;

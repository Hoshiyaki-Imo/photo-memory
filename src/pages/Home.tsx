import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-xl font-bold">Photo Memory</h1>

      <Button onClick={() => navigate("/camera")}>
        撮影する
      </Button>
      <Button onClick={() => console.log("a")}>読み込む</Button>
    </div>
  )
}

export default Home
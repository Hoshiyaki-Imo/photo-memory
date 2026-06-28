import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

function CameraPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    let stream: MediaStream
    const startCamera = async () => {
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    }

    startCamera()

    return () => {
    // ここでカメラ停止
    stream?.getTracks().forEach(track => track.stop())
  }
  }, [])

  const handleCapture = () => {
    const video = videoRef.current
    const canvas = canvasRef.current

    if (!video || !canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    ctx.drawImage(video, 0, 0)

    const dataUrl = canvas.toDataURL("image/png")

    console.log(dataUrl) // ← これが写真

    navigate("/")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <video ref={videoRef} autoPlay playsInline className="w-full max-w-sm rounded" />

      <Button onClick={handleCapture}>
        撮影
      </Button>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  )
}

export default CameraPage
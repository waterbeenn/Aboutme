export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}

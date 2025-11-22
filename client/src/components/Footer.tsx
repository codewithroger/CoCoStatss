import { BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-8 px-4 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2" data-testid="footer-brand">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Correlation Learning</span>
              <span className="text-xs text-muted-foreground">Master statistical concepts</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
            © 2024 Correlation Learning Platform. Built for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}

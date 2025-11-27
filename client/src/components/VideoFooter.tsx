import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video } from "lucide-react";
import videoUrl from "@assets/Understanding_Correlation_1764256951011.mp4";

export function VideoFooter() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-accent/5 to-primary/5" id="video-section" data-testid="section-video-footer">
      <div className="max-w-4xl mx-auto">
        <Card data-testid="card-video-footer">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="w-6 h-6" />
              Understanding Correlation - Video Tutorial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Watch this comprehensive video tutorial to deepen your understanding of correlation concepts, 
                formulas, and real-world applications. This visual guide complements the topics covered above.
              </p>
              <video 
                className="w-full rounded-lg shadow-lg border" 
                controls
                data-testid="video-understanding-correlation"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

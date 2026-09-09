import { useState } from "react";
import { useDwellStore } from "@/lib/dwell/store";
import { neighborhoods } from "@/lib/dwell/seed";
import type { NeighborhoodId } from "@/lib/dwell/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function Onboarding() {
  const hydrated = useDwellStore((s) => s.hydrated);
  const done = useDwellStore((s) => s.onboardingComplete);
  const complete = useDwellStore((s) => s.completeOnboarding);
  const identity = useDwellStore((s) => s.identity);
  const [step, setStep] = useState(0);
  const [name, setName] = useState(identity.name === "You" ? "" : identity.name);
  const [craft, setCraft] = useState(
    identity.craft === "Wanderer" ? "" : identity.craft,
  );
  const [letter, setLetter] = useState(identity.letter);
  const [hood, setHood] = useState<NeighborhoodId>(identity.neighborhoodId);

  if (!hydrated || done) return null;

  return (
    <Dialog open>
      <DialogContent
        showClose={false}
        className="sm:max-w-lg"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
            Crossing the threshold
          </p>
          <DialogTitle>
            {step === 0 && "This is not a feed."}
            {step === 1 && "Who keeps this room?"}
            {step === 2 && "A letter for whoever visits."}
          </DialogTitle>
          <DialogDescription>
            {step === 0 &&
              "In DWELL, you visit rooms instead of scrolling. Time spent is the signal. A keepsake is how you say you were here. A key is how you return."}
            {step === 1 &&
              "Your dwelling starts almost empty. Name it after yourself, or after the craft you are practicing."}
            {step === 2 &&
              "Every dwelling has a letter on the table. Write the first one. You can change it later."}
          </DialogDescription>
        </DialogHeader>

        {step === 1 ? (
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="ob-name">Your name</Label>
              <Input
                id="ob-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="A name you answer to"
                autoComplete="nickname"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ob-craft">Your craft</Label>
              <Input
                id="ob-craft"
                value={craft}
                onChange={(e) => setCraft(e.target.value)}
                placeholder="Baker, listener, cartographer…"
              />
            </div>
            <fieldset className="grid gap-2">
              <legend className="text-xs font-medium uppercase tracking-[0.16em] text-quiet">
                Neighborhood
              </legend>
              <div className="grid grid-cols-2 gap-2">
                {neighborhoods.map((n) => (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => setHood(n.id)}
                    className={cn(
                      "rounded-lg px-3 py-3 text-left text-sm shadow-[0_0_0_1px_rgb(244_239_230/0.12)] transition-colors duration-150",
                      hood === n.id
                        ? "bg-ink-3 text-cream"
                        : "text-quiet hover:text-cream",
                    )}
                  >
                    <span className="block font-medium text-cream">{n.name}</span>
                    <span className="mt-1 block text-xs">{n.climate}</span>
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid gap-2">
            <Label htmlFor="ob-letter">Letter to visitors</Label>
            <Textarea
              id="ob-letter"
              value={letter}
              onChange={(e) => setLetter(e.target.value)}
              rows={5}
            />
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-3 pt-2">
          <p className="text-xs tabular-nums text-quiet">{step + 1} / 3</p>
          <div className="flex gap-2">
            {step > 0 ? (
              <Button variant="ghost" onClick={() => setStep((s) => s - 1)}>
                Back
              </Button>
            ) : null}
            {step < 2 ? (
              <Button onClick={() => setStep((s) => s + 1)}>Continue</Button>
            ) : (
              <Button
                onClick={() =>
                  complete({
                    name: name.trim() || "You",
                    craft: craft.trim() || "Wanderer",
                    letter,
                    neighborhoodId: hood,
                  })
                }
              >
                Light the room
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

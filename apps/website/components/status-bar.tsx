type StatusBarProps = {
  text: string;
};

export function StatusBar({ text }: StatusBarProps) {
  return (
    <div
      data-status-bar
      className="flex items-center justify-center border-b border-ds-border bg-ds-surface-sunken px-4 py-2"
    >
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-ds-pill bg-ds-positive" aria-hidden="true" />
        <p className="font-ds-sans text-ds-caption font-medium text-ds-ink-soft">{text}</p>
      </div>
    </div>
  );
}

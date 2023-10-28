export default function StandardPageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="prose prose-stone dark:prose-invert mx-auto mt-8 px-4 pb-16">
      {children}
    </div>
  );
}

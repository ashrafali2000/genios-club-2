import PopOver from "@/components/popover";

export default function Circle({
  address,
  size,
}: {
  address: string;
  size?: number;
}) {
  size ? size : 19;

  if (address !== undefined)
    return (
      <div
        className={`h-[${size}px] w-[${size}px] cursor-pointer rounded-full border`}
      >
        <PopOver userAddress={address} matrix={2} size={size} />
      </div>
    );

  return (
    <div
      className={`h-[${size}px] w-[${size}px] cursor-pointer rounded-full border`}
    />
  );
}

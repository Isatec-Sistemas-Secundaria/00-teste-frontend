import cn from "../../../util/cn"

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("w-full flex flex-col items-center text-center bg-(--card) text-(--fg) rounded-2xl px-3 sm:px-9 py-2 shadow-(--shadow)", className)} {...props}/>
  )
}

Card.displayName = "Card"

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("w-full text-lg font-semibold mb-4", className)} {...props} />
  )
}

CardHeader.displayName = "CardHeader"

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("text-xl font-medium mb-2", className)} {...props}>
      {props.children}
    </h2>
  )
}

CardTitle.displayName = "CardTitle"

function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-[13px] font-normal text-(--fg)/80 mb-4", className)} {...props}>
      {props.children}
    </p>
  )
}

CardDescription.displayName = "CardDescription"


function CardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("w-full flex flex-col text-sm", className)} {...props}>
      {props.children}
    </div>
  )
}

CardBody.displayName = "CardBody"

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("w-full mt-8 text-(--fg-sec) text-[12px] text-center", className)} {...props}>
      {props.children}
    </div>
  )
}

CardFooter.displayName = "CardFooter"


export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter
}
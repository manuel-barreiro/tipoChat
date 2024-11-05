const ChatMessage = ({ avatar, author, message }) => {
  return (
    <div className="flex w-full items-center gap-3 py-2">
      <div className="h-9 w-9 flex-shrink-0 overflow-hidden rounded-full">
        <img src={avatar} alt={author} className="h-full w-full object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="mb-1 text-body-xsmall font-medium text-disabled">
          {author}
        </h3>
        <p className="text-body-small">{message}</p>
      </div>
    </div>
  )
}

export default ChatMessage

MESSAGE_SEPARATOR = " "
EMPTY_STRING = ""

WORD_TO_EMOJI_MAP = {
    ":)": "😀",
    "(:": "😞",
    "happy": "😀",
    "sad": "😞",
    "lol": "😂",
    "sick": "😨",
    "mermaid": "🧜‍"
}

class MessageNoneException(Exception):
    "Cannot convert message to emoji as message is null"
    pass

def emoji_converter(message):
    if message is None:
        raise MessageNoneException
     
    words = message.split(MESSAGE_SEPARATOR)
    converted_message = EMPTY_STRING

    for word in words:
        converted_message += WORD_TO_EMOJI_MAP.get(word, word)
        if word != words[len(words) - 1]:
            converted_message += MESSAGE_SEPARATOR
    return converted_message

message = input(">")
print(emoji_converter(message))

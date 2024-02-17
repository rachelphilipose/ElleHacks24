
# installed a hugging face model 
# huggingface-cli download TheBloke/Llama-2-7b-Chat-GGUF llama-2-7b-chat.Q4_K_M.gguf --local-dir . --local-dir-use-symlinks False

import streamlit as st 
from llama_index import (
  SimpleDirectoryReader,
  VectorStoreIndex,
  ServiceContext,
)
from llama_index.llms import LlamaCPP
from llama_index.llms.llama_utils import (
  messages_to_prompt,
  completion_to_prompt,
)
from langchain.schema import(SystemMessage, HumanMessage, AIMessage)
from llama_index.readers.web import SimpleWebPageReader


# create the streamlit page
def init_page() -> None:
  st.set_page_config(
    page_title="Personal Chatbot"
  )
  st.header("Persoanl Chatbot")
  st.sidebar.title("Options")

# selects the llm, sets parameters (temp -> accuracy, max_new_tokens -> response length)
def select_llm() -> LlamaCPP:
    return LlamaCPP(
        model_path="./llama-2-7b-chat.Q2_K.gguf",
        temperature=0.1,
        max_new_tokens=500,
        context_window=3900,
        generate_kwargs={},
        model_kwargs={"n_gpu_layers":1},
        messages_to_prompt=messages_to_prompt,
        completion_to_prompt=completion_to_prompt,
        verbose=True,
    )

# if clear button pressed or no messages to initiate, create a system message
def init_messages() -> None:
  clear_button = st.sidebar.button("Clear Conversation", key="clear")
  if clear_button or "messages" not in st.session_state:
    st.session_state.messages = [
      SystemMessage(
        content="you are a helpful AI assistant. Reply your answer in markdown format."
      )
    ]

# get llm answer to prompt
def get_answer(llm, messages) -> str:
  response = llm.complete(messages)
  return response.text

def main() -> None:
  
  # create page
  init_page()
  # select llm
  llm = select_llm()
  # checks if clear clicked or messages not initialized
  init_messages()
  
  # if input provided in prompt
  # assigns value and checks if input not empty
  if user_input := st.chat_input("Input your question!"):

    # stores human message in content data
    st.session_state.messages.append(HumanMessage(content=user_input))
    with st.spinner("Bot is typing ..."):
      answer = get_answer(llm, user_input)
      print(answer)
    
    # stores ai response in streamlit content data
    st.session_state.messages.append(AIMessage(content=answer))
    

  messages = st.session_state.get("messages", [])
  for message in messages:

    # if current message the ai message, that means the current message is a response from the bot
    if isinstance(message, AIMessage):
      # formats as assistant response
      with st.chat_message("assistant"):
        st.markdown(message.content)
    # if current message human response, current message user input
    elif isinstance(message, HumanMessage):
      with st.chat_message("user"):
        st.markdown(message.content)

if __name__ == "__main__":
  main()
  




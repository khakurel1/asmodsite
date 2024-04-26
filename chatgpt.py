import openai

# Set your API key here
openai.api_key = 'sk-proj-wNvbFr2xY9b30mrPYKPkT3BlbkFJ2osn8qDM3WDhT3OztQuA'

# Creating a chat completion request to the OpenAI API
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Can you explain how to use the OpenAI API with Python?"}
    ]
)

# Print the response from GPT-4
print(response['choices'][0]['message']['content'])

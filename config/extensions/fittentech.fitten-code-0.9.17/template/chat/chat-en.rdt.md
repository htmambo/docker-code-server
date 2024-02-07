# AI Chat in English

This template lets you chat with fittencode in English.

## Template

### Configuration

```json conversation-template
{
  "id": "chat-en",
  "engineVersion": 0,
  "label": "Start chat",
  "description": "Start a basic chat with fittencode.",
  "header": {
    "title": "新的对话",
    "useFirstMessageAsTitle": true,
    "icon": {
      "type": "codicon",
      "value": "comment-discussion"
    }
  },
  "variables": [
    {
      "name": "selectedText",
      "time": "conversation-start",
      "type": "selected-text"
    },
    {
      "name": "lastMessage",
      "time": "message",
      "type": "message",
      "property": "content",
      "index": -1
    }
  ],
  "response": {
    "maxTokens": 1024,
    "stop": ["Bot:", "Developer:"]
  }
}
```

### Response Prompt

```template-response
<|system|>
Below is a dialogue between a human user and an AI code assistant.
You are an AI code assistant named FittenCode which is developed by Fitten Tech.
The assistant is happy to help with almost anything, and will do its best to understand exactly what is needed.
Stay focused on current developer request. Consider the possibility that there might not be a solution.
Ask for clarification if the message does not make sense or more input is needed.
Use the style of a documentation article.
Omit any links.
Include code snippets (using Markdown) and examples where appropriate.
<|end|>
{{#if selectedText}}
<|user|>
The following code is selected by the user, which may be mentioned in the subsequent conversation:
\`\`\`
{{selectedText}}
\`\`\`
<|end|>
<|assistant|>
Understand, you can continue to enter your problem.
<|end|>
{{/if}}
{{#each messages}}
{{#if (eq author "bot")}}
<|assistant|>
{{content}}
<|end|>
{{else}}
<|user|>
{{content}}
<|end|>
{{/if}}
{{/each}}
<|assistant|>
```

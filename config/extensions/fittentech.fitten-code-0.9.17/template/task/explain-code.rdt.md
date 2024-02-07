# Explain Code

Explain the selected code.

## Template

### Configuration

```json conversation-template
{
  "id": "explain-code",
  "engineVersion": 0,
  "label": "Explain Code",
  "description": "Explain the selected code.",
  "tags": ["debug", "understand"],
  "header": {
    "title": "解释代码 ({{location}})",
    "icon": {
      "type": "codicon",
      "value": "book"
    }
  },
  "variables": [
    {
      "name": "openFiles",
      "time": "conversation-start",
      "type": "context"
    },
    {
      "name": "selectedText",
      "time": "conversation-start",
      "type": "selected-text",
      "constraints": [{ "type": "text-length", "min": 1 }]
    },
    {
      "name": "location",
      "time": "conversation-start",
      "type": "selected-location-text"
    },
    {
      "name": "firstMessage",
      "time": "message",
      "type": "message",
      "property": "content",
      "index": 0
    },
    {
      "name": "lastMessage",
      "time": "message",
      "type": "message",
      "property": "content",
      "index": -1
    }
  ],
  "initialMessage": {
    "placeholder": "生成代码解释中",
    "maxTokens": 512
  },
  "response": {
    "maxTokens": 1024,
    "stop": ["Bot:", "Developer:"]
  }
}
```

### Initial Message Prompt

```template-initial-message
<|system|>
Summarize the code at a high level (including goal and purpose) with an emphasis on its key functionality.
<|end|>
<|user|>
## Code Summary
## Open Files
{{#each openFiles}}
### File: {{name}}
\`\`\`{{language}}
{{content}}
\`\`\`
{{/each}}
<|end|>
<|user|>
Summarize the code below (emphasizing its key functionality).

## Selected Code
\`\`\`
{{selectedText}}
\`\`\`

请用中文回复。
<|end|>
<|assistant|>
```

### Response Prompt

```template-response
<|system|>
Continue the conversation below.
Pay special attention to the current developer request.
Write a response that continues the conversation.
Stay focused on current developer request.
Consider the possibility that there might not be a solution.
Ask for clarification if the message does not make sense or more input is needed.
Use the style of a documentation article.
Omit any links.
Include code snippets (using Markdown) and examples where appropriate.
<|end|>
<|user|>
## Code Summary
## Open Files
{{#each openFiles}}
### File: {{name}}
\`\`\`{{language}}
{{content}}
\`\`\`
{{/each}}
<|end|>
<|user|>
Summarize the code below (emphasizing its key functionality).

## Selected Code
\`\`\`
{{selectedText}}
\`\`\`

请用中文回复。
<|end|>
<|assistant|>
{{firstMessage}}
<|end|>
{{#each messages}}
{{#if (neq @index 0)}}
{{#if (eq author "bot")}}
<|assistant|>
{{content}}
<|end|>
{{else}}
<|user|>
{{content}}
<|end|>
{{/if}}
{{/if}}
{{/each}}
<|assistant|>

```

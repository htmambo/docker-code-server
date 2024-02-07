# Find Bugs

Template to find bugs in the selected code.

## Template

### Configuration

```json conversation-template
{
  "id": "find-bugs",
  "engineVersion": 0,
  "label": "Find bugs",
  "tags": ["debug", "code quality"],
  "description": "Find potential bugs in the selected code.",
  "header": {
    "title": "查找Bug ({{location}})",
    "icon": {
      "type": "codicon",
      "value": "bug"
    }
  },
  "variables": [
    {
      "name": "selectedText",
      "time": "conversation-start",
      "type": "selected-text",
      "constraints": [{ "type": "text-length", "min": 1 }]
    },
    {
      "name": "language",
      "time": "conversation-start",
      "type": "language",
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
    "placeholder": "查找Bug中",
    "maxTokens": 1024
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
Describe what could be wrong with the code?
Only consider defects that would lead to incorrect behavior.
Provide potential fix suggestions where possible.
Consider that there might not be any problems with the code."
Include code snippets (using Markdown) and examples where appropriate.
<|end|>
<|user|>
What could be wrong with the code below?
Only consider defects that would lead to incorrect behavior.
The programming language is {{language}}.

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
The programming language is {{language}}.
Write a response that continues the conversation.
Stay focused on current developer request.
Consider the possibility that there might not be a solution.
Ask for clarification if the message does not make sense or more input is needed.
Use the style of a documentation article.
Omit any links.
Include code snippets (using Markdown) and examples where appropriate.
<|end|>
<|user|>
What could be wrong with the code below?
Only consider defects that would lead to incorrect behavior.
The programming language is {{language}}.

{{#if selectedText}}
## Selected Code
\`\`\`
{{selectedText}}
\`\`\`

请用中文回复。
{{/if}}
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

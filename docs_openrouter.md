***

title: Quickstart
subtitle: Get started with OpenRouter
slug: quickstart
headline: OpenRouter Quickstart Guide | Developer Documentation
canonical-url: '[https://openrouter.ai/docs/quickstart](https://openrouter.ai/docs/quickstart)'
'og:site\_name': OpenRouter Documentation
'og:title': OpenRouter Quickstart Guide
'og:description': >-
Get started with OpenRouter's unified API for hundreds of AI models. Learn how
to integrate using OpenAI SDK, direct API calls, or third-party frameworks.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?pathname=quickstart\&title=Quick%20Start\&description=Start%20using%20OpenRouter%20API%20in%20minutes%20with%20any%20SDK](https://openrouter.ai/dynamic-og?pathname=quickstart\&title=Quick%20Start\&description=Start%20using%20OpenRouter%20API%20in%20minutes%20with%20any%20SDK)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

OpenRouter provides a unified API that gives you access to hundreds of AI models through a single endpoint, while automatically handling fallbacks and selecting the most cost-effective options. Get started with just a few lines of code using your preferred SDK or framework.

<Note>
  ```
  Read https://openrouter.ai/skills/create-agent/SKILL.md and follow the instructions to build an agent using OpenRouter.
  ```
</Note>

<Tip>
  Looking for information about free models and rate limits? Please see the [FAQ](/docs/faq#how-are-rate-limits-calculated)
</Tip>

In the examples below, the OpenRouter-specific headers are optional. Setting them allows your app to appear on the OpenRouter leaderboards. For detailed information about app attribution, see our [App Attribution guide](/docs/app-attribution).

## Using the OpenRouter SDK (Beta)

First, install the SDK:

<CodeGroup>
  ```bash title="npm"
  npm install @openrouter/sdk
  ```

  ```bash title="yarn"
  yarn add @openrouter/sdk
  ```

  ```bash title="pnpm"
  pnpm add @openrouter/sdk
  ```
</CodeGroup>

Then use it in your code:

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
    defaultHeaders: {
      'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
    },
  });

  const completion = await openRouter.chat.send({
    model: 'openai/gpt-5.2',
    messages: [
      {
        role: 'user',
        content: 'What is the meaning of life?',
      },
    ],
    stream: false,
  });

  console.log(completion.choices[0].message.content);
  ```
</CodeGroup>

## Using the OpenRouter API directly

<Tip>
  You can use the interactive [Request Builder](/request-builder) to generate OpenRouter API requests in the language of your choice.
</Tip>

<CodeGroup>
  ```python title="Python"
  import requests
  import json

  response = requests.post(
    url="https://openrouter.ai/api/v1/chat/completions",
    headers={
      "Authorization": "Bearer <OPENROUTER_API_KEY>",
      "HTTP-Referer": "<YOUR_SITE_URL>", # Optional. Site URL for rankings on openrouter.ai.
      "X-OpenRouter-Title": "<YOUR_SITE_NAME>", # Optional. Site title for rankings on openrouter.ai.
    },
    data=json.dumps({
      "model": "openai/gpt-5.2", # Optional
      "messages": [
        {
          "role": "user",
          "content": "What is the meaning of life?"
        }
      ]
    })
  )
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openai/gpt-5.2',
      messages: [
        {
          role: 'user',
          content: 'What is the meaning of life?',
        },
      ],
    }),
  });
  ```

  ```shell title="Shell"
  curl https://openrouter.ai/api/v1/chat/completions \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENROUTER_API_KEY" \
    -d '{
    "model": "openai/gpt-5.2",
    "messages": [
      {
        "role": "user",
        "content": "What is the meaning of life?"
      }
    ]
  }'
  ```
</CodeGroup>

## Using the OpenAI SDK

<CodeGroup>
  ```typescript title="Typescript"
  import OpenAI from 'openai';

  const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: '<OPENROUTER_API_KEY>',
    defaultHeaders: {
      'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
    },
  });

  async function main() {
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-5.2',
      messages: [
        {
          role: 'user',
          content: 'What is the meaning of life?',
        },
      ],
    });

    console.log(completion.choices[0].message);
  }

  main();
  ```

  ```python title="Python"
  from openai import OpenAI

  client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="<OPENROUTER_API_KEY>",
  )

  completion = client.chat.completions.create(
    extra_headers={
      "HTTP-Referer": "<YOUR_SITE_URL>", # Optional. Site URL for rankings on openrouter.ai.
      "X-OpenRouter-Title": "<YOUR_SITE_NAME>", # Optional. Site title for rankings on openrouter.ai.
    },
    model="openai/gpt-5.2",
    messages=[
      {
        "role": "user",
        "content": "What is the meaning of life?"
      }
    ]
  )

  print(completion.choices[0].message.content)
  ```
</CodeGroup>

The API also supports [streaming](/docs/api/reference/streaming).

## Using third-party SDKs

For information about using third-party SDKs and frameworks with OpenRouter, please [see our frameworks documentation.](/docs/guides/community/frameworks-and-integrations-overview)
***

title: Principles
subtitle: Core principles and values of OpenRouter
headline: Principles | OpenRouter's Core Values and Mission
canonical-url: '[https://openrouter.ai/docs/guides/overview/principles](https://openrouter.ai/docs/guides/overview/principles)'
'og:site\_name': OpenRouter Documentation
'og:title': Principles - OpenRouter's Core Values
'og:description': >-
Learn about OpenRouter's guiding principles and mission. Understand our
commitment to price optimization, standardized APIs, and high availability in
AI model deployment.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?pathname=principles\&title=Core%20Values\&description=Multi-model%20AI%20access%20with%20optimized%20pricing%20and%20reliability](https://openrouter.ai/dynamic-og?pathname=principles\&title=Core%20Values\&description=Multi-model%20AI%20access%20with%20optimized%20pricing%20and%20reliability)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

OpenRouter helps developers source and optimize AI usage. We believe the future is multi-model and multi-provider.

## Why OpenRouter?

**Price and Performance**. OpenRouter scouts for the best prices, the lowest latencies, and the highest throughput across dozens of providers, and lets you choose how to [prioritize](/docs/features/provider-routing) them.

**Standardized API**. No need to change code when switching between models or providers. You can even let your users [choose and pay for their own](/docs/guides/overview/auth/oauth).

**Real-World Insights**. Be the first to take advantage of new models. See real-world data of [how often models are used](https://openrouter.ai/rankings) for different purposes. Keep up to date in our [Discord channel](https://discord.com/channels/1091220969173028894/1094454198688546826).

**Consolidated Billing**. Simple and transparent billing, regardless of how many providers you use.

**Higher Availability**. Fallback providers, and automatic, smart routing means your requests still work even when providers go down.

**Higher Rate Limits**. OpenRouter works directly with providers to provide better rate limits and more throughput.
***

title: Models
subtitle: One API for hundreds of models
headline: OpenRouter Models | Access 400+ AI Models Through One API
canonical-url: '[https://openrouter.ai/docs/guides/overview/models](https://openrouter.ai/docs/guides/overview/models)'
'og:site\_name': OpenRouter Documentation
'og:title': OpenRouter Models - Unified Access to 400+ AI Models
'og:description': >-
Access all major language models (LLMs) through OpenRouter's unified API.
Browse available models, compare capabilities, and integrate with your
preferred provider.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?pathname=models\&title=AI%20Model%20Hub\&description=Access%20all%20LLMs%20through%20one%20unified%20API%20endpoint](https://openrouter.ai/dynamic-og?pathname=models\&title=AI%20Model%20Hub\&description=Access%20all%20LLMs%20through%20one%20unified%20API%20endpoint)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

Explore and browse 400+ models and providers [on our website](/models), or [with our API](/docs/api-reference/models/get-models). You can also subscribe to our [RSS feed](/api/v1/models?use_rss=true) to stay updated on new models.

## Models API Standard

Our [Models API](/docs/api-reference/models/get-models) makes the most important information about all LLMs freely available as soon as we confirm it.

### API Response Schema

The Models API returns a standardized JSON response format that provides comprehensive metadata for each available model. This schema is cached at the edge and designed for reliable integration with production applications.

#### Root Response Object

```json
{
  "data": [
    /* Array of Model objects */
  ]
}
```

#### Model Object Schema

Each model in the `data` array contains the following standardized fields:

| Field                  | Type                                          | Description                                                                            |
| ---------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                   | `string`                                      | Unique model identifier used in API requests (e.g., `"google/gemini-2.5-pro-preview"`) |
| `canonical_slug`       | `string`                                      | Permanent slug for the model that never changes                                        |
| `name`                 | `string`                                      | Human-readable display name for the model                                              |
| `created`              | `number`                                      | Unix timestamp of when the model was added to OpenRouter                               |
| `description`          | `string`                                      | Detailed description of the model's capabilities and characteristics                   |
| `context_length`       | `number`                                      | Maximum context window size in tokens                                                  |
| `architecture`         | `Architecture`                                | Object describing the model's technical capabilities                                   |
| `pricing`              | `Pricing`                                     | Lowest price structure for using this model                                            |
| `top_provider`         | `TopProvider`                                 | Configuration details for the primary provider                                         |
| `per_request_limits`   | Rate limiting information (null if no limits) |                                                                                        |
| `supported_parameters` | `string[]`                                    | Array of supported API parameters for this model                                       |

#### Architecture Object

```typescript
{
  "input_modalities": string[], // Supported input types: ["file", "image", "text"]
  "output_modalities": string[], // Supported output types: ["text"]
  "tokenizer": string,          // Tokenization method used
  "instruct_type": string | null // Instruction format type (null if not applicable)
}
```

#### Pricing Object

All pricing values are in USD per token/request/unit. A value of `"0"` indicates the feature is free.

```typescript
{
  "prompt": string,           // Cost per input token
  "completion": string,       // Cost per output token
  "request": string,          // Fixed cost per API request
  "image": string,           // Cost per image input
  "web_search": string,      // Cost per web search operation
  "internal_reasoning": string, // Cost for internal reasoning tokens
  "input_cache_read": string,   // Cost per cached input token read
  "input_cache_write": string   // Cost per cached input token write
}
```

#### Top Provider Object

```typescript
{
  "context_length": number,        // Provider-specific context limit
  "max_completion_tokens": number, // Maximum tokens in response
  "is_moderated": boolean         // Whether content moderation is applied
}
```

#### Supported Parameters

The `supported_parameters` array indicates which OpenAI-compatible parameters work with each model:

* `tools` - Function calling capabilities
* `tool_choice` - Tool selection control
* `max_tokens` - Response length limiting
* `temperature` - Randomness control
* `top_p` - Nucleus sampling
* `reasoning` - Internal reasoning mode
* `include_reasoning` - Include reasoning in response
* `structured_outputs` - JSON schema enforcement
* `response_format` - Output format specification
* `stop` - Custom stop sequences
* `frequency_penalty` - Repetition reduction
* `presence_penalty` - Topic diversity
* `seed` - Deterministic outputs

<Note title="Different models tokenize text in different ways">
  Some models break up text into chunks of multiple characters (GPT, Claude,
  Llama, etc), while others tokenize by character (PaLM). This means that token
  counts (and therefore costs) will vary between models, even when inputs and
  outputs are the same. Costs are displayed and billed according to the
  tokenizer for the model in use. You can use the `usage` field in the response
  to get the token counts for the input and output.
</Note>

If there are models or providers you are interested in that OpenRouter doesn't have, please tell us about them in our [Discord channel](https://openrouter.ai/discord).

## For Providers

If you're interested in working with OpenRouter, you can learn more on our [providers page](/docs/use-cases/for-providers).
***

title: Multimodal Capabilities
subtitle: 'Send images, PDFs, audio, and video to OpenRouter models'
headline: OpenRouter Multimodal | Complete Documentation
canonical-url: '[https://openrouter.ai/docs/guides/overview/multimodal/overview](https://openrouter.ai/docs/guides/overview/multimodal/overview)'
'og:site\_name': OpenRouter Documentation
'og:title': OpenRouter Multimodal Capabilities - Complete Documentation
'og:description': >-
Send images, PDFs, audio, and video to OpenRouter models through our unified
API.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=OpenRouter%20Multimodal\&description=Send%20images%2C%20PDFs%2C%20audio%2C%20and%20video%20to%20OpenRouter%20models](https://openrouter.ai/dynamic-og?title=OpenRouter%20Multimodal\&description=Send%20images%2C%20PDFs%2C%20audio%2C%20and%20video%20to%20OpenRouter%20models).
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

OpenRouter supports multiple input modalities beyond text, allowing you to send images, PDFs, audio, and video files to compatible models through our unified API. This enables rich multimodal interactions for a wide variety of use cases.

## Supported Modalities

### Images

Send images to vision-capable models for analysis, description, OCR, and more. OpenRouter supports multiple image formats and both URL-based and base64-encoded images.

[Learn more about image inputs →](/docs/features/multimodal/images)

### Image Generation

Generate images from text prompts using AI models with image output capabilities. OpenRouter supports various image generation models that can create high-quality images based on your descriptions.

[Learn more about image generation →](/docs/features/multimodal/image-generation)

### PDFs

Process PDF documents with any model on OpenRouter. Our intelligent PDF parsing system extracts text and handles both text-based and scanned documents.

[Learn more about PDF processing →](/docs/features/multimodal/pdfs)

### Audio

Send audio files to speech-capable models for transcription, analysis, and processing, or receive audio responses from models with audio output capabilities. OpenRouter supports common audio formats for both input and output.

[Learn more about audio →](/docs/features/multimodal/audio)

### Video

Send video files to video-capable models for analysis, description, object detection, and action recognition. OpenRouter supports multiple video formats for comprehensive video understanding tasks.

[Learn more about video inputs →](/docs/features/multimodal/videos)

## Getting Started

All multimodal inputs use the same `/api/v1/chat/completions` endpoint with the `messages` parameter. Different content types are specified in the message content array:

* **Images**: Use `image_url` content type
* **PDFs**: Use `file` content type with PDF data
* **Audio**: Use `input_audio` content type
* **Video**: Use `video_url` content type

You can combine multiple modalities in a single request, and the number of files you can send varies by provider and model.

## Model Compatibility

Not all models support every modality. OpenRouter automatically filters available models based on your request content:

* **Vision models**: Required for image processing
* **File-compatible models**: Can process PDFs natively or through our parsing system
* **Audio-capable models**: Required for audio input processing
* **Video-capable models**: Required for video input processing

Use our [Models page](https://openrouter.ai/models) to find models that support your desired input modalities.

## Input Format Support

OpenRouter supports both **direct URLs** and **base64-encoded data** for multimodal inputs:

### URLs (Recommended for public content)

* **Images**: `https://example.com/image.jpg`
* **PDFs**: `https://example.com/document.pdf`
* **Audio**: Not supported via URL (base64 only)
* **Video**: Provider-specific (e.g., YouTube links for Gemini on AI Studio)

### Base64 Encoding (Required for local files)

* **Images**: `data:image/jpeg;base64,{base64_data}`
* **PDFs**: `data:application/pdf;base64,{base64_data}`
* **Audio**: Raw base64 string with format specification
* **Video**: `data:video/mp4;base64,{base64_data}`

<Info>
  URLs are more efficient for large files as they don't require local encoding and reduce request payload size. Base64 encoding is required for local files or when the content is not publicly accessible.

  **Note for video URLs**: Video URL support varies by provider. For example, Google Gemini on AI Studio only supports YouTube links. See the [video inputs documentation](/docs/features/multimodal/videos) for provider-specific details.
</Info>

## Frequently Asked Questions

<AccordionGroup>
  <Accordion title="Can I mix different modalities in one request?">
    Yes! You can send text, images, PDFs, audio, and video in the same request. The model will process all inputs together.
  </Accordion>

  <Accordion title="How is multimodal content priced?">
    * **Images**: Typically priced per image or as input tokens
    * **PDFs**: Free text extraction, paid OCR processing, or native model pricing
    * **Audio input**: Priced as input tokens based on duration
    * **Audio output**: Priced as completion tokens
    * **Video**: Priced as input tokens based on duration and resolution
  </Accordion>

  <Accordion title="Which models support video input?">
    Video support varies by model. Use the [Models page](/models?fmt=cards\&input_modalities=video) to filter for video-capable models. Check each model's documentation for specific video format and duration limits.
  </Accordion>
</AccordionGroup>
***

title: Image Inputs
subtitle: How to send images to OpenRouter models
headline: OpenRouter Image Inputs | Complete Documentation
canonical-url: '[https://openrouter.ai/docs/guides/overview/multimodal/images](https://openrouter.ai/docs/guides/overview/multimodal/images)'
'og:site\_name': OpenRouter Documentation
'og:title': OpenRouter Image Inputs - Complete Documentation
'og:description': Send images to vision models through the OpenRouter API.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=OpenRouter%20Image%20Inputs\&description=Send%20images%20to%20vision%20models%20through%20the%20OpenRouter%20API](https://openrouter.ai/dynamic-og?title=OpenRouter%20Image%20Inputs\&description=Send%20images%20to%20vision%20models%20through%20the%20OpenRouter%20API).
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

Requests with images, to multimodel models, are available via the `/api/v1/chat/completions` API with a multi-part `messages` parameter. The `image_url` can either be a URL or a base64-encoded image. Note that multiple images can be sent in separate content array entries. The number of images you can send in a single request varies per provider and per model. Due to how the content is parsed, we recommend sending the text prompt first, then the images. If the images must come first, we recommend putting it in the system prompt.

OpenRouter supports both **direct URLs** and **base64-encoded data** for images:

* **URLs**: More efficient for publicly accessible images as they don't require local encoding
* **Base64**: Required for local files or private images that aren't publicly accessible

### Using Image URLs

Here's how to send an image using a URL:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemini-3-flash-preview'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    import { OpenRouter } from '@openrouter/sdk';

    const openRouter = new OpenRouter({
      apiKey: '{{API_KEY_REF}}',
    });

    const result = await openRouter.chat.send({
      model: '{{MODEL}}',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: "What's in this image?",
            },
            {
              type: 'image_url',
              imageUrl: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg',
              },
            },
          ],
        },
      ],
      stream: false,
    });

    console.log(result);
    ```

    ```python
    import requests
    import json

    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY_REF}",
        "Content-Type": "application/json"
    }

    messages = [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "What's in this image?"
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"
                    }
                }
            ]
        }
    ]

    payload = {
        "model": "{{MODEL}}",
        "messages": messages
    }

    response = requests.post(url, headers=headers, json=payload)
    print(response.json())
    ```

    ```typescript title="TypeScript (fetch)"
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY_REF}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: "What's in this image?",
              },
              {
                type: 'image_url',
                image_url: {
                  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg',
                },
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    console.log(data);
    ```
  </CodeGroup>
</Template>

### Using Base64 Encoded Images

For locally stored images, you can send them using base64 encoding. Here's how to do it:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemini-3-flash-preview'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    import { OpenRouter } from '@openrouter/sdk';
    import * as fs from 'fs';

    const openRouter = new OpenRouter({
      apiKey: '{{API_KEY_REF}}',
    });

    async function encodeImageToBase64(imagePath: string): Promise<string> {
      const imageBuffer = await fs.promises.readFile(imagePath);
      const base64Image = imageBuffer.toString('base64');
      return `data:image/jpeg;base64,${base64Image}`;
    }

    // Read and encode the image
    const imagePath = 'path/to/your/image.jpg';
    const base64Image = await encodeImageToBase64(imagePath);

    const result = await openRouter.chat.send({
      model: '{{MODEL}}',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: "What's in this image?",
            },
            {
              type: 'image_url',
              imageUrl: {
                url: base64Image,
              },
            },
          ],
        },
      ],
      stream: false,
    });

    console.log(result);
    ```

    ```python
    import requests
    import json
    import base64
    from pathlib import Path

    def encode_image_to_base64(image_path):
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode('utf-8')

    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY_REF}",
        "Content-Type": "application/json"
    }

    # Read and encode the image
    image_path = "path/to/your/image.jpg"
    base64_image = encode_image_to_base64(image_path)
    data_url = f"data:image/jpeg;base64,{base64_image}"

    messages = [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "What's in this image?"
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": data_url
                    }
                }
            ]
        }
    ]

    payload = {
        "model": "{{MODEL}}",
        "messages": messages
    }

    response = requests.post(url, headers=headers, json=payload)
    print(response.json())
    ```

    ```typescript title="TypeScript (fetch)"
    async function encodeImageToBase64(imagePath: string): Promise<string> {
      const imageBuffer = await fs.promises.readFile(imagePath);
      const base64Image = imageBuffer.toString('base64');
      return `data:image/jpeg;base64,${base64Image}`;
    }

    // Read and encode the image
    const imagePath = 'path/to/your/image.jpg';
    const base64Image = await encodeImageToBase64(imagePath);

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY_REF}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: "What's in this image?",
              },
              {
                type: 'image_url',
                image_url: {
                  url: base64Image,
                },
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    console.log(data);
    ```
  </CodeGroup>
</Template>

Supported image content types are:

* `image/png`
* `image/jpeg`
* `image/webp`
* `image/gif`
***

title: Image Generation
subtitle: How to generate images with OpenRouter models
headline: OpenRouter Image Generation | Complete Documentation
canonical-url: '[https://openrouter.ai/docs/guides/overview/multimodal/image-generation](https://openrouter.ai/docs/guides/overview/multimodal/image-generation)'
'og:site\_name': OpenRouter Documentation
'og:title': OpenRouter Image Generation - Complete Documentation
'og:description': Generate images using AI models through the OpenRouter API.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=OpenRouter%20Image%20Generation\&description=Generate%20images%20using%20AI%20models%20through%20the%20OpenRouter%20API](https://openrouter.ai/dynamic-og?title=OpenRouter%20Image%20Generation\&description=Generate%20images%20using%20AI%20models%20through%20the%20OpenRouter%20API).
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

OpenRouter supports image generation through models that have `"image"` in their `output_modalities`. These models can create images from text prompts when you specify the appropriate modalities in your request.

## Model Discovery

You can find image generation models in several ways:

### On the Models Page

Visit the [Models page](/models) and filter by output modalities to find models capable of image generation. Look for models that list `"image"` in their output modalities.

### In the Chatroom

When using the [Chatroom](/chat), click the **Image** button to automatically filter and select models with image generation capabilities. If no image-capable model is active, you'll be prompted to add one.

## API Usage

To generate images, send a request to the `/api/v1/chat/completions` endpoint with the `modalities` parameter. The value depends on the model's capabilities:

* **Models that output both text and images** (e.g., Gemini): Use `modalities: ["image", "text"]`
* **Models that only output images** (e.g., Sourceful, Flux): Use `modalities: ["image"]`

### Basic Image Generation

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemini-2.5-flash-image-preview'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    import { OpenRouter } from '@openrouter/sdk';

    const openRouter = new OpenRouter({
      apiKey: '{{API_KEY_REF}}',
    });

    const result = await openRouter.chat.send({
      model: '{{MODEL}}',
      messages: [
        {
          role: 'user',
          content: 'Generate a beautiful sunset over mountains',
        },
      ],
      modalities: ['image', 'text'],
      stream: false,
    });

    // The generated image will be in the assistant message
    if (result.choices) {
      const message = result.choices[0].message;
      if (message.images) {
        message.images.forEach((image, index) => {
          const imageUrl = image.imageUrl.url; // Base64 data URL
          console.log(`Generated image ${index + 1}: ${imageUrl.substring(0, 50)}...`);
        });
      }
    }
    ```

    ```python
    import requests
    import json

    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY_REF}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "{{MODEL}}",
        "messages": [
            {
                "role": "user",
                "content": "Generate a beautiful sunset over mountains"
            }
        ],
        "modalities": ["image", "text"]
    }

    response = requests.post(url, headers=headers, json=payload)
    result = response.json()

    # The generated image will be in the assistant message
    if result.get("choices"):
        message = result["choices"][0]["message"]
        if message.get("images"):
            for image in message["images"]:
                image_url = image["image_url"]["url"]  # Base64 data URL
                print(f"Generated image: {image_url[:50]}...")
    ```

    ```typescript title="TypeScript (fetch)"
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY_REF}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        messages: [
          {
            role: 'user',
            content: 'Generate a beautiful sunset over mountains',
          },
        ],
        modalities: ['image', 'text'],
      }),
    });

    const result = await response.json();

    // The generated image will be in the assistant message
    if (result.choices) {
      const message = result.choices[0].message;
      if (message.images) {
        message.images.forEach((image, index) => {
          const imageUrl = image.image_url.url; // Base64 data URL
          console.log(`Generated image ${index + 1}: ${imageUrl.substring(0, 50)}...`);
        });
      }
    }
    ```
  </CodeGroup>
</Template>

### Image Configuration Options

Some image generation models support additional configuration through the `image_config` parameter.

#### Aspect Ratio

Set `image_config.aspect_ratio` to request specific aspect ratios for generated images.

**Supported aspect ratios:**

* `1:1` → 1024×1024 (default)
* `2:3` → 832×1248
* `3:2` → 1248×832
* `3:4` → 864×1184
* `4:3` → 1184×864
* `4:5` → 896×1152
* `5:4` → 1152×896
* `9:16` → 768×1344
* `16:9` → 1344×768
* `21:9` → 1536×672

**Extended aspect ratios** (supported by [`google/gemini-3.1-flash-image-preview`](/models/google/gemini-3.1-flash-image-preview) only):

* `1:4` → Tall, narrow format ideal for scrolling carousels and vertical UI elements
* `4:1` → Wide, short format for hero banners and horizontal layouts
* `1:8` → Extra-tall format for notification headers and narrow vertical spaces
* `8:1` → Extra-wide format for wide-format banners and panoramic layouts

#### Image Size

Set `image_config.image_size` to control the resolution of generated images.

**Supported sizes:**

* `1K` → Standard resolution (default)
* `2K` → Higher resolution
* `4K` → Highest resolution
* `0.5K` → Lower resolution, optimized for efficiency (supported by [`google/gemini-3.1-flash-image-preview`](/models/google/gemini-3.1-flash-image-preview) only)

You can combine both `aspect_ratio` and `image_size` in the same request:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemini-3-pro-image-preview'
}}
>
  <CodeGroup>
    ```python
    import requests
    import json

    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY_REF}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "{{MODEL}}",
        "messages": [
            {
                "role": "user",
                "content": "Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme"
            }
        ],
        "modalities": ["image", "text"],
        "image_config": {
            "aspect_ratio": "16:9",
            "image_size": "4K"
        }
    }

    response = requests.post(url, headers=headers, json=payload)
    result = response.json()

    if result.get("choices"):
        message = result["choices"][0]["message"]
        if message.get("images"):
            for image in message["images"]:
                image_url = image["image_url"]["url"]
                print(f"Generated image: {image_url[:50]}...")
    ```

    ```typescript
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY_REF}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        messages: [
          {
            role: 'user',
            content: 'Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme',
          },
        ],
        modalities: ['image', 'text'],
        image_config: {
          aspect_ratio: '16:9',
          image_size: '4K',
        },
      }),
    });

    const result = await response.json();

    if (result.choices) {
      const message = result.choices[0].message;
      if (message.images) {
        message.images.forEach((image, index) => {
          const imageUrl = image.image_url.url;
          console.log(`Generated image ${index + 1}: ${imageUrl.substring(0, 50)}...`);
        });
      }
    }
    ```
  </CodeGroup>
</Template>

#### Font Inputs (Sourceful only)

Use `image_config.font_inputs` to render custom text with specific fonts in generated images. The text you want to render must also be included in your prompt for best results. This parameter is only supported by Sourceful models (`sourceful/riverflow-v2-fast` and `sourceful/riverflow-v2-pro`).

Each font input is an object with:

* `font_url` (required): URL to the font file
* `text` (required): Text to render with the font

**Limits:**

* Maximum 2 font inputs per request
* Additional cost: \$0.03 per font input

**Example:**

```json
{
  "image_config": {
    "font_inputs": [
      {
        "font_url": "https://example.com/fonts/custom-font.ttf",
        "text": "Hello World"
      }
    ]
  }
}
```

**Tips for best results:**

* Include the text in your prompt along with details about font name, color, size, and position
* The `text` parameter should match exactly what's in your prompt - avoid extra wording or quotation marks
* Use line breaks or double spaces to separate headlines and sub-headers when using the same font
* Works best with short, clear headlines and sub-headlines

#### Super Resolution References (Sourceful only)

Use `image_config.super_resolution_references` to enhance low-quality elements in your input image using high-quality reference images. The output image will match the size of your input image, so use larger input images for better results. This parameter is only supported by Sourceful models (`sourceful/riverflow-v2-fast` and `sourceful/riverflow-v2-pro`) when using image-to-image generation (i.e., when input images are provided in `messages`).

**Limits:**

* Maximum 4 reference URLs per request
* Only works with image-to-image requests (ignored when there are no images in `messages`)
* Additional cost: \$0.20 per reference

**Example:**

```json
{
  "image_config": {
    "super_resolution_references": [
      "https://example.com/reference1.jpg",
      "https://example.com/reference2.jpg"
    ]
  }
}
```

**Tips for best results:**

* Supply an input image where the elements to enhance are present but low quality
* Use larger input images for better output quality (output matches input size)
* Use high-quality reference images that show what you want the enhanced elements to look like

### Streaming Image Generation

Image generation also works with streaming responses:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemini-2.5-flash-image-preview'
}}
>
  <CodeGroup>
    ```python
    import requests
    import json

    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY_REF}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "{{MODEL}}",
        "messages": [
            {
                "role": "user",
                "content": "Create an image of a futuristic city"
            }
        ],
        "modalities": ["image", "text"],
        "stream": True
    }

    response = requests.post(url, headers=headers, json=payload, stream=True)

    for line in response.iter_lines():
        if line:
            line = line.decode('utf-8')
            if line.startswith('data: '):
                data = line[6:]
                if data != '[DONE]':
                    try:
                        chunk = json.loads(data)
                        if chunk.get("choices"):
                            delta = chunk["choices"][0].get("delta", {})
                            if delta.get("images"):
                                for image in delta["images"]:
                                    print(f"Generated image: {image['image_url']['url'][:50]}...")
                    except json.JSONDecodeError:
                        continue
    ```

    ```typescript
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY_REF}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        messages: [
          {
            role: 'user',
            content: 'Create an image of a futuristic city',
          },
        ],
        modalities: ['image', 'text'],
        stream: true,
      }),
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data !== '[DONE]') {
            try {
              const parsed = JSON.parse(data);
              if (parsed.choices) {
                const delta = parsed.choices[0].delta;
                if (delta?.images) {
                  delta.images.forEach((image, index) => {
                    console.log(`Generated image ${index + 1}: ${image.image_url.url.substring(0, 50)}...`);
                  });
                }
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }
    }
    ```
  </CodeGroup>
</Template>

## Response Format

When generating images, the assistant message includes an `images` field containing the generated images:

```json
{
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "I've generated a beautiful sunset image for you.",
        "images": [
          {
            "type": "image_url",
            "image_url": {
              "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
            }
          }
        ]
      }
    }
  ]
}
```

### Image Format

* **Format**: Images are returned as base64-encoded data URLs
* **Types**: Typically PNG format (`data:image/png;base64,`)
* **Multiple Images**: Some models can generate multiple images in a single response
* **Size**: Image dimensions vary by model capabilities

## Model Compatibility

Not all models support image generation. To use this feature:

1. **Check Output Modalities**: Ensure the model has `"image"` in its `output_modalities`
2. **Set Modalities Parameter**: Use `["image", "text"]` for models that output both, or `["image"]` for image-only models
3. **Use Compatible Models**: Examples include:
   * `google/gemini-3.1-flash-image-preview` (supports extended aspect ratios and 0.5K resolution)
   * `google/gemini-2.5-flash-image-preview`
   * `black-forest-labs/flux.2-pro`
   * `black-forest-labs/flux.2-flex`
   * `sourceful/riverflow-v2-standard-preview`
   * Other models with image generation capabilities

## Best Practices

* **Clear Prompts**: Provide detailed descriptions for better image quality
* **Model Selection**: Choose models specifically designed for image generation
* **Error Handling**: Check for the `images` field in responses before processing
* **Rate Limits**: Image generation may have different rate limits than text generation
* **Storage**: Consider how you'll handle and store the base64 image data

## Troubleshooting

**No images in response?**

* Verify the model supports image generation (`output_modalities` includes `"image"`)
* Ensure you've set the `modalities` parameter correctly: `["image", "text"]` for models that output both, or `["image"]` for image-only models
* Check that your prompt is requesting image generation

**Model not found?**

* Use the [Models page](/models) to find available image generation models
* Filter by output modalities to see compatible models
***

title: PDF Inputs
subtitle: How to send PDFs to OpenRouter models
headline: OpenRouter PDF Inputs | Complete Documentation
canonical-url: '[https://openrouter.ai/docs/guides/overview/multimodal/pdfs](https://openrouter.ai/docs/guides/overview/multimodal/pdfs)'
'og:site\_name': OpenRouter Documentation
'og:title': OpenRouter PDF Inputs - Complete Documentation
'og:description': Send PDF documents to any model on OpenRouter.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=OpenRouter%20PDF%20Inputs\&description=Send%20PDF%20documents%20to%20any%20model%20on%20OpenRouter](https://openrouter.ai/dynamic-og?title=OpenRouter%20PDF%20Inputs\&description=Send%20PDF%20documents%20to%20any%20model%20on%20OpenRouter).
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

OpenRouter supports PDF processing through the `/api/v1/chat/completions` API. PDFs can be sent as **direct URLs** or **base64-encoded data URLs** in the messages array, via the file content type. This feature works on **any** model on OpenRouter.

**URL support**: Send publicly accessible PDFs directly without downloading or encoding
**Base64 support**: Required for local files or private documents that aren't publicly accessible

PDFs also work in the chat room for interactive testing.

<Info>
  When a model supports file input natively, the PDF is passed directly to the
  model. When the model does not support file input natively, OpenRouter will
  parse the file and pass the parsed results to the requested model.
</Info>

<Tip>
  You can send both PDFs and other file types in the same request.
</Tip>

## Plugin Configuration

To configure PDF processing, use the `plugins` parameter in your request. OpenRouter provides several PDF processing engines with different capabilities and pricing:

```typescript
{
  plugins: [
    {
      id: 'file-parser',
      pdf: {
        engine: 'pdf-text', // or 'mistral-ocr' or 'native'
      },
    },
  ],
}
```

## Pricing

OpenRouter provides several PDF processing engines:

1. <code>"{PDFParserEngine.MistralOCR}"</code>: Best for scanned documents or
   PDFs with images (\${MISTRAL_OCR_COST.toString()} per 1,000 pages).
2. <code>"{PDFParserEngine.PDFText}"</code>: Best for well-structured PDFs with
   clear text content (Free).
3. <code>"{PDFParserEngine.Native}"</code>: Only available for models that
   support file input natively (charged as input tokens).

If you don't explicitly specify an engine, OpenRouter will default first to the model's native file processing capabilities, and if that's not available, we will use the <code>"{DEFAULT_PDF_ENGINE}"</code> engine.

## Using PDF URLs

For publicly accessible PDFs, you can send the URL directly without needing to download and encode the file:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'anthropic/claude-sonnet-4',
  ENGINE: PDFParserEngine.MistralOCR,
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    import { OpenRouter } from '@openrouter/sdk';

    const openRouter = new OpenRouter({
      apiKey: '{{API_KEY_REF}}',
    });

    const result = await openRouter.chat.send({
      model: '{{MODEL}}',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'What are the main points in this document?',
            },
            {
              type: 'file',
              file: {
                filename: 'document.pdf',
                fileData: 'https://bitcoin.org/bitcoin.pdf',
              },
            },
          ],
        },
      ],
      // Optional: Configure PDF processing engine
      plugins: [
        {
          id: 'file-parser',
          pdf: {
            engine: '{{ENGINE}}',
          },
        },
      ],
      stream: false,
    });

    console.log(result);
    ```

    ```python
    import requests
    import json

    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY_REF}",
        "Content-Type": "application/json"
    }

    messages = [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "What are the main points in this document?"
                },
                {
                    "type": "file",
                    "file": {
                        "filename": "document.pdf",
                        "file_data": "https://bitcoin.org/bitcoin.pdf"
                    }
                },
            ]
        }
    ]

    # Optional: Configure PDF processing engine
    plugins = [
        {
            "id": "file-parser",
            "pdf": {
                "engine": "{{ENGINE}}"
            }
        }
    ]

    payload = {
        "model": "{{MODEL}}",
        "messages": messages,
        "plugins": plugins
    }

    response = requests.post(url, headers=headers, json=payload)
    print(response.json())
    ```

    ```typescript title="TypeScript (fetch)"
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY_REF}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'What are the main points in this document?',
              },
              {
                type: 'file',
                file: {
                  filename: 'document.pdf',
                  file_data: 'https://bitcoin.org/bitcoin.pdf',
                },
              },
            ],
          },
        ],
        // Optional: Configure PDF processing engine
        plugins: [
          {
            id: 'file-parser',
            pdf: {
              engine: '{{ENGINE}}',
            },
          },
        ],
      }),
    });

    const data = await response.json();
    console.log(data);
    ```
  </CodeGroup>
</Template>

<Info>
  PDF URLs work with all processing engines. For Mistral OCR, the URL is passed directly to the service. For other engines, OpenRouter fetches the PDF and processes it internally.
</Info>

## Using Base64 Encoded PDFs

For local PDF files or when you need to send PDF content directly, you can base64 encode the file:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemma-3-27b-it',
  ENGINE: PDFParserEngine.PDFText,
  DEFAULT_PDF_ENGINE,
}}
>
  <CodeGroup>
    ```python
    import requests
    import json
    import base64
    from pathlib import Path

    def encode_pdf_to_base64(pdf_path):
        with open(pdf_path, "rb") as pdf_file:
            return base64.b64encode(pdf_file.read()).decode('utf-8')

    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY_REF}",
        "Content-Type": "application/json"
    }

    # Read and encode the PDF
    pdf_path = "path/to/your/document.pdf"
    base64_pdf = encode_pdf_to_base64(pdf_path)
    data_url = f"data:application/pdf;base64,{base64_pdf}"

    messages = [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "What are the main points in this document?"
                },
                {
                    "type": "file",
                    "file": {
                        "filename": "document.pdf",
                        "file_data": data_url
                    }
                },
            ]
        }
    ]

    # Optional: Configure PDF processing engine
    # PDF parsing will still work even if the plugin is not explicitly set
    plugins = [
        {
            "id": "file-parser",
            "pdf": {
                "engine": "{{ENGINE}}"  # defaults to "{{DEFAULT_PDF_ENGINE}}". See Pricing above
            }
        }
    ]

    payload = {
        "model": "{{MODEL}}",
        "messages": messages,
        "plugins": plugins
    }

    response = requests.post(url, headers=headers, json=payload)
    print(response.json())
    ```

    ```typescript
    async function encodePDFToBase64(pdfPath: string): Promise<string> {
      const pdfBuffer = await fs.promises.readFile(pdfPath);
      const base64PDF = pdfBuffer.toString('base64');
      return `data:application/pdf;base64,${base64PDF}`;
    }

    // Read and encode the PDF
    const pdfPath = 'path/to/your/document.pdf';
    const base64PDF = await encodePDFToBase64(pdfPath);

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY_REF}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'What are the main points in this document?',
              },
              {
                type: 'file',
                file: {
                  filename: 'document.pdf',
                  file_data: base64PDF,
                },
              },
            ],
          },
        ],
        // Optional: Configure PDF processing engine
        // PDF parsing will still work even if the plugin is not explicitly set
        plugins: [
          {
            id: 'file-parser',
            pdf: {
              engine: '{{ENGINE}}', // defaults to "{{DEFAULT_PDF_ENGINE}}". See Pricing above
            },
          },
        ],
      }),
    });

    const data = await response.json();
    console.log(data);
    ```
  </CodeGroup>
</Template>

## Skip Parsing Costs

When you send a PDF to the API, the response may include file annotations in the assistant's message. These annotations contain structured information about the PDF document that was parsed. By sending these annotations back in subsequent requests, you can avoid re-parsing the same PDF document multiple times, which saves both processing time and costs.

Here's how to reuse file annotations:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemma-3-27b-it'
}}
>
  <CodeGroup>
    ```python
    import requests
    import json
    import base64
    from pathlib import Path

    # First, encode and send the PDF
    def encode_pdf_to_base64(pdf_path):
        with open(pdf_path, "rb") as pdf_file:
            return base64.b64encode(pdf_file.read()).decode('utf-8')

    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY_REF}",
        "Content-Type": "application/json"
    }

    # Read and encode the PDF
    pdf_path = "path/to/your/document.pdf"
    base64_pdf = encode_pdf_to_base64(pdf_path)
    data_url = f"data:application/pdf;base64,{base64_pdf}"

    # Initial request with the PDF
    messages = [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "What are the main points in this document?"
                },
                {
                    "type": "file",
                    "file": {
                        "filename": "document.pdf",
                        "file_data": data_url
                    }
                },
            ]
        }
    ]

    payload = {
        "model": "{{MODEL}}",
        "messages": messages
    }

    response = requests.post(url, headers=headers, json=payload)
    response_data = response.json()

    # Store the annotations from the response
    file_annotations = None
    if response_data.get("choices") and len(response_data["choices"]) > 0:
        if "annotations" in response_data["choices"][0]["message"]:
            file_annotations = response_data["choices"][0]["message"]["annotations"]

    # Follow-up request using the annotations (without sending the PDF again)
    if file_annotations:
        follow_up_messages = [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "What are the main points in this document?"
                    },
                    {
                        "type": "file",
                        "file": {
                            "filename": "document.pdf",
                            "file_data": data_url
                        }
                    }
                ]
            },
            {
                "role": "assistant",
                "content": "The document contains information about...",
                "annotations": file_annotations
            },
            {
                "role": "user",
                "content": "Can you elaborate on the second point?"
            }
        ]

        follow_up_payload = {
            "model": "{{MODEL}}",
            "messages": follow_up_messages
        }

        follow_up_response = requests.post(url, headers=headers, json=follow_up_payload)
        print(follow_up_response.json())
    ```

    ```typescript
    import fs from 'fs/promises';

    async function encodePDFToBase64(pdfPath: string): Promise<string> {
      const pdfBuffer = await fs.readFile(pdfPath);
      const base64PDF = pdfBuffer.toString('base64');
      return `data:application/pdf;base64,${base64PDF}`;
    }

    // Initial request with the PDF
    async function processDocument() {
      // Read and encode the PDF
      const pdfPath = 'path/to/your/document.pdf';
      const base64PDF = await encodePDFToBase64(pdfPath);

      const initialResponse = await fetch(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${API_KEY_REF}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: '{{MODEL}}',
            messages: [
              {
                role: 'user',
                content: [
                  {
                    type: 'text',
                    text: 'What are the main points in this document?',
                  },
                  {
                    type: 'file',
                    file: {
                      filename: 'document.pdf',
                      file_data: base64PDF,
                    },
                  },
                ],
              },
            ],
          }),
        },
      );

      const initialData = await initialResponse.json();

      // Store the annotations from the response
      let fileAnnotations = null;
      if (initialData.choices && initialData.choices.length > 0) {
        if (initialData.choices[0].message.annotations) {
          fileAnnotations = initialData.choices[0].message.annotations;
        }
      }

      // Follow-up request using the annotations (without sending the PDF again)
      if (fileAnnotations) {
        const followUpResponse = await fetch(
          'https://openrouter.ai/api/v1/chat/completions',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${API_KEY_REF}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: '{{MODEL}}',
              messages: [
                {
                  role: 'user',
                  content: [
                    {
                      type: 'text',
                      text: 'What are the main points in this document?',
                    },
                    {
                      type: 'file',
                      file: {
                        filename: 'document.pdf',
                        file_data: base64PDF,
                      },
                    },
                  ],
                },
                {
                  role: 'assistant',
                  content: 'The document contains information about...',
                  annotations: fileAnnotations,
                },
                {
                  role: 'user',
                  content: 'Can you elaborate on the second point?',
                },
              ],
            }),
          },
        );

        const followUpData = await followUpResponse.json();
        console.log(followUpData);
      }
    }

    processDocument();
    ```
  </CodeGroup>
</Template>

<Info>
  When you include the file annotations from a previous response in your
  subsequent requests, OpenRouter will use this pre-parsed information instead
  of re-parsing the PDF, which saves processing time and costs. This is
  especially beneficial for large documents or when using the `mistral-ocr`
  engine which incurs additional costs.
</Info>

## File Annotations Schema

When OpenRouter parses a PDF, the response includes file annotations in the assistant message. Here is the TypeScript type for the annotation schema:

```typescript
type FileAnnotation = {
  type: 'file';
  file: {
    hash: string;           // Unique hash identifying the parsed file
    name?: string;          // Original filename (optional)
    content: ContentPart[]; // Parsed content from the file
  };
};

type ContentPart =
  | { type: 'text'; text: string }
  | { type: 'image_url'; image_url: { url: string } };
```

The `content` array contains the parsed content from the PDF, which may include text blocks and images (as base64 data URLs). The `hash` field uniquely identifies the parsed file content and is used to skip re-parsing when you include the annotation in subsequent requests.

## Response Format

The API will return a response in the following format:

```json
{
  "id": "gen-1234567890",
  "provider": "DeepInfra",
  "model": "google/gemma-3-27b-it",
  "object": "chat.completion",
  "created": 1234567890,
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "The document discusses...",
        "annotations": [
          {
            "type": "file",
            "file": {
              "hash": "abc123...",
              "name": "document.pdf",
              "content": [
                { "type": "text", "text": "Parsed text content..." },
                { "type": "image_url", "image_url": { "url": "data:image/png;base64,..." } }
              ]
            }
          }
        ]
      }
    }
  ],
  "usage": {
    "prompt_tokens": 1000,
    "completion_tokens": 100,
    "total_tokens": 1100
  }
}
```
***

title: Audio
subtitle: How to send and receive audio with OpenRouter models
headline: OpenRouter Audio | Complete Documentation
canonical-url: '[https://openrouter.ai/docs/guides/overview/multimodal/audio](https://openrouter.ai/docs/guides/overview/multimodal/audio)'
'og:site\_name': OpenRouter Documentation
'og:title': OpenRouter Audio - Complete Documentation
'og:description': >-
Send audio files to and receive audio responses from speech-capable models
through the OpenRouter API.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=OpenRouter%20Audio\&description=Send%20and%20receive%20audio%20with%20speech-capable%20models%20through%20the%20OpenRouter%20API](https://openrouter.ai/dynamic-og?title=OpenRouter%20Audio\&description=Send%20and%20receive%20audio%20with%20speech-capable%20models%20through%20the%20OpenRouter%20API).
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

OpenRouter supports both sending audio files to compatible models and receiving audio responses via the API. This guide covers how to work with audio inputs and outputs.

## Audio Inputs

Send audio files to compatible models for transcription, analysis, and processing. Audio input requests use the `/api/v1/chat/completions` API with the `input_audio` content type. Audio files must be base64-encoded and include the format specification.

**Note**: Audio files must be **base64-encoded** - direct URLs are not supported for audio content.

You can search for models that support audio input by filtering to audio input modality on our [Models page](/models?fmt=cards\&input_modalities=audio).

### Sending Audio Files

Here's how to send an audio file for processing:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemini-2.5-flash'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    import { OpenRouter } from '@openrouter/sdk';
    import fs from "fs/promises";

    const openRouter = new OpenRouter({
      apiKey: '{{API_KEY_REF}}',
    });

    async function encodeAudioToBase64(audioPath: string): Promise<string> {
      const audioBuffer = await fs.readFile(audioPath);
      return audioBuffer.toString("base64");
    }

    // Read and encode the audio file
    const audioPath = "path/to/your/audio.wav";
    const base64Audio = await encodeAudioToBase64(audioPath);

    const result = await openRouter.chat.send({
      model: "{{MODEL}}",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Please transcribe this audio file.",
            },
            {
              type: "input_audio",
              inputAudio: {
                data: base64Audio,
                format: "wav",
              },
            },
          ],
        },
      ],
      stream: false,
    });

    console.log(result);
    ```

    ```python
    import requests
    import json
    import base64

    def encode_audio_to_base64(audio_path):
        with open(audio_path, "rb") as audio_file:
            return base64.b64encode(audio_file.read()).decode('utf-8')

    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY_REF}",
        "Content-Type": "application/json"
    }

    # Read and encode the audio file
    audio_path = "path/to/your/audio.wav"
    base64_audio = encode_audio_to_base64(audio_path)

    messages = [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Please transcribe this audio file."
                },
                {
                    "type": "input_audio",
                    "input_audio": {
                        "data": base64_audio,
                        "format": "wav"
                    }
                }
            ]
        }
    ]

    payload = {
        "model": "{{MODEL}}",
        "messages": messages
    }

    response = requests.post(url, headers=headers, json=payload)
    print(response.json())
    ```

    ```typescript title="TypeScript (fetch)"
    import fs from "fs/promises";

    async function encodeAudioToBase64(audioPath: string): Promise<string> {
      const audioBuffer = await fs.readFile(audioPath);
      return audioBuffer.toString("base64");
    }

    // Read and encode the audio file
    const audioPath = "path/to/your/audio.wav";
    const base64Audio = await encodeAudioToBase64(audioPath);

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY_REF}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "{{MODEL}}",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Please transcribe this audio file.",
              },
              {
                type: "input_audio",
                input_audio: {
                  data: base64Audio,
                  format: "wav",
                },
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    console.log(data);
    ```
  </CodeGroup>
</Template>

### Supported Audio Input Formats

Supported audio formats vary by provider. Common formats include:

* `wav` - WAV audio
* `mp3` - MP3 audio
* `aiff` - AIFF audio
* `aac` - AAC audio
* `ogg` - OGG Vorbis audio
* `flac` - FLAC audio
* `m4a` - M4A audio
* `pcm16` - PCM16 audio
* `pcm24` - PCM24 audio

**Note:** Check your model's documentation to confirm which audio formats it supports. Not all models support all formats.

## Audio Output

OpenRouter supports receiving audio responses from models that have audio output capabilities. To request audio output, include the `modalities` and `audio` parameters in your request.

You can search for models that support audio output by filtering to audio output modality on our [Models page](/models?fmt=cards\&output_modalities=audio).

### Requesting Audio Output

To receive audio output, set `modalities` to `["text", "audio"]` and provide the `audio` configuration with your desired voice and format:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'openai/gpt-4o-audio-preview'
}}
>
  <CodeGroup>
    ```python
    import requests
    import json
    import base64

    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY_REF}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "{{MODEL}}",
        "messages": [
            {
                "role": "user",
                "content": "Say hello in a friendly tone."
            }
        ],
        "modalities": ["text", "audio"],
        "audio": {
            "voice": "alloy",
            "format": "wav"
        },
        "stream": True
    }

    # Audio output requires streaming — the response is delivered as SSE chunks
    response = requests.post(url, headers=headers, json=payload, stream=True)

    audio_data_chunks = []
    transcript_chunks = []

    for line in response.iter_lines():
        if not line:
            continue
        decoded = line.decode("utf-8")
        if not decoded.startswith("data: "):
            continue
        data = decoded[len("data: "):]
        if data.strip() == "[DONE]":
            break
        chunk = json.loads(data)
        delta = chunk["choices"][0].get("delta", {})
        audio = delta.get("audio", {})
        if audio.get("data"):
            audio_data_chunks.append(audio["data"])
        if audio.get("transcript"):
            transcript_chunks.append(audio["transcript"])

    transcript = "".join(transcript_chunks)
    print(f"Transcript: {transcript}")

    # Combine and decode the base64 audio chunks, then save
    full_audio_b64 = "".join(audio_data_chunks)
    audio_bytes = base64.b64decode(full_audio_b64)
    with open("output.wav", "wb") as f:
        f.write(audio_bytes)
    ```

    ```typescript title="TypeScript (fetch)"
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY_REF}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "{{MODEL}}",
        messages: [
          {
            role: "user",
            content: "Say hello in a friendly tone.",
          },
        ],
        modalities: ["text", "audio"],
        audio: {
          voice: "alloy",
          format: "wav",
        },
        stream: true,
      }),
    });

    // Audio output requires streaming — parse the SSE chunks
    const reader = response.body!.getReader();
    const decoder = new TextDecoder();

    const audioDataChunks: string[] = [];
    const transcriptChunks: string[] = [];
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop()!; // keep incomplete line in buffer

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice("data: ".length).trim();
        if (data === "[DONE]") break;

        const chunk = JSON.parse(data);
        const audio = chunk.choices?.[0]?.delta?.audio;
        if (audio?.data) audioDataChunks.push(audio.data);
        if (audio?.transcript) transcriptChunks.push(audio.transcript);
      }
    }

    const transcript = transcriptChunks.join("");
    console.log(`Transcript: ${transcript}`);

    // audioDataChunks joined together is the full base64-encoded audio
    const fullAudioB64 = audioDataChunks.join("");
    ```
  </CodeGroup>
</Template>

### Streaming Chunk Format

Audio output requires streaming (`stream: true`). Audio data and transcript are delivered incrementally via the `delta.audio` field in each chunk:

```json
{
  "choices": [
    {
      "delta": {
        "audio": {
          "data": "<base64-encoded audio chunk>",
          "transcript": "Hello"
        }
      }
    }
  ]
}
```

### Audio Configuration Options

The `audio` parameter accepts the following options:

| Option   | Description                                                                                                                        |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `voice`  | The voice to use for audio generation (e.g., `alloy`, `echo`, `fable`, `onyx`, `nova`, `shimmer`). Available voices vary by model. |
| `format` | The audio format for the output (e.g., `wav`, `mp3`, `flac`, `opus`, `pcm16`). Available formats vary by model.                    |
***

title: Video Inputs
subtitle: How to send video files to OpenRouter models
headline: OpenRouter Video Inputs | Complete Documentation
canonical-url: '[https://openrouter.ai/docs/guides/overview/multimodal/videos](https://openrouter.ai/docs/guides/overview/multimodal/videos)'
'og:site\_name': OpenRouter Documentation
'og:title': OpenRouter Video Inputs - Complete Documentation
'og:description': Send video files to video-capable models through the OpenRouter API.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=OpenRouter%20Video%20Inputs\&description=Send%20video%20files%20to%20video-capable%20models%20through%20the%20OpenRouter%20API](https://openrouter.ai/dynamic-og?title=OpenRouter%20Video%20Inputs\&description=Send%20video%20files%20to%20video-capable%20models%20through%20the%20OpenRouter%20API).
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

OpenRouter supports sending video files to compatible models via the API. This guide will show you how to work with video using our API.

OpenRouter supports both **direct URLs** and **base64-encoded data URLs** for videos:

* **URLs**: Efficient for publicly accessible videos as they don't require local encoding
* **Base64 Data URLs**: Required for local files or private videos that aren't publicly accessible

<Info>
  **Important:** Video URL support varies by provider. OpenRouter only sends video URLs to providers that explicitly support them. For example, Google Gemini on AI Studio only supports YouTube links (not Vertex AI).
</Info>

<Warning>
  **API Only:** Video inputs are currently only supported via the API. Video uploads are not available in the OpenRouter chatroom interface at this time.
</Warning>

## Video Inputs

Requests with video files to compatible models are available via the `/api/v1/chat/completions` API with the `video_url` content type. The `url` can either be a URL or a base64-encoded data URL. Note that only models with video processing capabilities will handle these requests.

You can search for models that support video by filtering to video input modality on our [Models page](/models?fmt=cards\&input_modalities=video).

### Using Video URLs

Here's how to send a video using a URL. Note that for Google Gemini on AI Studio, only YouTube links are supported:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemini-2.5-flash'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    import { OpenRouter } from '@openrouter/sdk';

    const openRouter = new OpenRouter({
      apiKey: '{{API_KEY_REF}}',
    });

    const result = await openRouter.chat.send({
      model: "{{MODEL}}",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Please describe what's happening in this video.",
            },
            {
              type: "video_url",
              videoUrl: {
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              },
            },
          ],
        },
      ],
      stream: false,
    });

    console.log(result);
    ```

    ```python
    import requests
    import json

    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY_REF}",
        "Content-Type": "application/json"
    }

    messages = [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Please describe what's happening in this video."
                },
                {
                    "type": "video_url",
                    "video_url": {
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    }
                }
            ]
        }
    ]

    payload = {
        "model": "{{MODEL}}",
        "messages": messages
    }

    response = requests.post(url, headers=headers, json=payload)
    print(response.json())
    ```

    ```typescript title="TypeScript (fetch)"
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY_REF}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "{{MODEL}}",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Please describe what's happening in this video.",
              },
              {
                type: "video_url",
                video_url: {
                  url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    console.log(data);
    ```
  </CodeGroup>
</Template>

### Using Base64 Encoded Videos

For locally stored videos, you can send them using base64 encoding as data URLs:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemini-2.5-flash'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    import { OpenRouter } from '@openrouter/sdk';
    import * as fs from 'fs';

    const openRouter = new OpenRouter({
      apiKey: '{{API_KEY_REF}}',
    });

    async function encodeVideoToBase64(videoPath: string): Promise<string> {
      const videoBuffer = await fs.promises.readFile(videoPath);
      const base64Video = videoBuffer.toString('base64');
      return `data:video/mp4;base64,${base64Video}`;
    }

    // Read and encode the video
    const videoPath = 'path/to/your/video.mp4';
    const base64Video = await encodeVideoToBase64(videoPath);

    const result = await openRouter.chat.send({
      model: '{{MODEL}}',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: "What's in this video?",
            },
            {
              type: 'video_url',
              videoUrl: {
                url: base64Video,
              },
            },
          ],
        },
      ],
      stream: false,
    });

    console.log(result);
    ```

    ```python
    import requests
    import json
    import base64
    from pathlib import Path

    def encode_video_to_base64(video_path):
        with open(video_path, "rb") as video_file:
            return base64.b64encode(video_file.read()).decode('utf-8')

    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY_REF}",
        "Content-Type": "application/json"
    }

    # Read and encode the video
    video_path = "path/to/your/video.mp4"
    base64_video = encode_video_to_base64(video_path)
    data_url = f"data:video/mp4;base64,{base64_video}"

    messages = [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "What's in this video?"
                },
                {
                    "type": "video_url",
                    "video_url": {
                        "url": data_url
                    }
                }
            ]
        }
    ]

    payload = {
        "model": "{{MODEL}}",
        "messages": messages
    }

    response = requests.post(url, headers=headers, json=payload)
    print(response.json())
    ```

    ```typescript title="TypeScript (fetch)"
    import * as fs from 'fs';

    async function encodeVideoToBase64(videoPath: string): Promise<string> {
      const videoBuffer = await fs.promises.readFile(videoPath);
      const base64Video = videoBuffer.toString('base64');
      return `data:video/mp4;base64,${base64Video}`;
    }

    // Read and encode the video
    const videoPath = 'path/to/your/video.mp4';
    const base64Video = await encodeVideoToBase64(videoPath);

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY_REF}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: "What's in this video?",
              },
              {
                type: 'video_url',
                video_url: {
                  url: base64Video,
                },
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    console.log(data);
    ```
  </CodeGroup>
</Template>

## Supported Video Formats

OpenRouter supports the following video formats:

* `video/mp4`
* `video/mpeg`
* `video/mov`
* `video/webm`

## Common Use Cases

Video inputs enable a wide range of applications:

* **Video Summarization**: Generate text summaries of video content
* **Object and Activity Recognition**: Identify objects, people, and actions in videos
* **Scene Understanding**: Describe settings, environments, and contexts
* **Sports Analysis**: Analyze gameplay, movements, and tactics
* **Surveillance**: Monitor and analyze security footage
* **Educational Content**: Analyze instructional videos and provide insights

## Best Practices

### File Size Considerations

Video files can be large, which affects both upload time and processing costs:

* **Compress videos** when possible to reduce file size without significant quality loss
* **Trim videos** to include only relevant segments
* **Consider resolution**: Lower resolutions (e.g., 720p vs 4K) reduce file size while maintaining usability for most analysis tasks
* **Frame rate**: Lower frame rates can reduce file size for videos where high temporal resolution isn't critical

### Optimal Video Length

Different models may have different limits on video duration:

* Check model-specific documentation for maximum video length
* For long videos, consider splitting into shorter segments
* Focus on key moments rather than sending entire long-form content

### Quality vs. Size Trade-offs

Balance video quality with practical considerations:

* **High quality** (1080p+, high bitrate): Best for detailed visual analysis, object detection, text recognition
* **Medium quality** (720p, moderate bitrate): Suitable for most general analysis tasks
* **Lower quality** (480p, lower bitrate): Acceptable for basic scene understanding and action recognition

## Provider-Specific Video URL Support

Video URL support varies significantly by provider:

* **Google Gemini (AI Studio)**: Only supports YouTube links (e.g., `https://www.youtube.com/watch?v=...`)
* **Google Gemini (Vertex AI)**: Does not support video URLs - use base64-encoded data URLs instead
* **Other providers**: Check model-specific documentation for video URL support

## Troubleshooting

**Video not processing?**

* Verify the model supports video input (check `input_modalities` includes `"video"`)
* If using a video URL, confirm the provider supports video URLs (see Provider-Specific Video URL Support above)
* For Gemini on AI Studio, ensure you're using a YouTube link, not a direct video file URL
* If the video URL isn't working, try using a base64-encoded data URL instead
* Check that the video format is supported
* Verify the video file isn't corrupted

**Large file errors?**

* Compress the video to reduce file size
* Reduce video resolution or frame rate
* Trim the video to a shorter duration
* Check model-specific file size limits
* Consider using a video URL (if supported by the provider) instead of base64 encoding for large files

**Poor analysis results?**

* Ensure video quality is sufficient for the task
* Provide clear, specific prompts about what to analyze
* Consider if the video duration is appropriate for the model
* Check if the video content is clearly visible and well-lit
***

title: OAuth PKCE
subtitle: Connect your users to OpenRouter
headline: OAuth PKCE | Secure Authentication for OpenRouter
canonical-url: '[https://openrouter.ai/docs/guides/overview/auth/oauth](https://openrouter.ai/docs/guides/overview/auth/oauth)'
'og:site\_name': OpenRouter Documentation
'og:title': OAuth PKCE - Secure User Authentication
'og:description': >-
Implement secure user authentication with OpenRouter using OAuth PKCE.
Complete guide to setting up and managing OAuth authentication flows.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?pathname=use-cases/oauth-pkce\&title=OAuth%20PKCE\&description=Secure%20one-click%20authentication%20for%20your%20OpenRouter%20users](https://openrouter.ai/dynamic-og?pathname=use-cases/oauth-pkce\&title=OAuth%20PKCE\&description=Secure%20one-click%20authentication%20for%20your%20OpenRouter%20users)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

Users can connect to OpenRouter in one click using [Proof Key for Code Exchange (PKCE)](https://oauth.net/2/pkce/).

Here's a step-by-step guide:

## PKCE Guide

### Step 1: Send your user to OpenRouter

To start the PKCE flow, send your user to OpenRouter's `/auth` URL with a `callback_url` parameter pointing back to your site:

<CodeGroup>
  ```txt title="With S256 Code Challenge (Recommended)" wordWrap
  https://openrouter.ai/auth?callback_url=<YOUR_SITE_URL>&code_challenge=<CODE_CHALLENGE>&code_challenge_method=S256
  ```

  ```txt title="With Plain Code Challenge" wordWrap
  https://openrouter.ai/auth?callback_url=<YOUR_SITE_URL>&code_challenge=<CODE_CHALLENGE>&code_challenge_method=plain
  ```

  ```txt title="Without Code Challenge" wordWrap
  https://openrouter.ai/auth?callback_url=<YOUR_SITE_URL>
  ```
</CodeGroup>

The `code_challenge` parameter is optional but recommended.

Your user will be prompted to log in to OpenRouter and authorize your app. After authorization, they will be redirected back to your site with a `code` parameter in the URL:

![Alt text](file:ddb55b14-f418-46a7-bf6e-a7ea823d3eab)

<Tip title="Use SHA-256 for Maximum Security">
  For maximum security, set `code_challenge_method` to `S256`, and set `code_challenge` to the base64 encoding of the sha256 hash of `code_verifier`.

  For more info, [visit Auth0's docs](https://auth0.com/docs/get-started/authentication-and-authorization-flow/call-your-api-using-the-authorization-code-flow-with-pkce#parameters).
</Tip>

#### How to Generate a Code Challenge

The following example leverages the Web Crypto API and the Buffer API to generate a code challenge for the S256 method. You will need a bundler to use the Buffer API in the web browser:

<CodeGroup>
  ```typescript title="Generate Code Challenge"
  import { Buffer } from 'buffer';

  async function createSHA256CodeChallenge(input: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Buffer.from(hash).toString('base64url');
  }

  const codeVerifier = 'your-random-string';
  const generatedCodeChallenge = await createSHA256CodeChallenge(codeVerifier);
  ```
</CodeGroup>

#### Localhost Apps

If your app is a local-first app or otherwise doesn't have a public URL, it is recommended to test with `http://localhost:3000` as the callback and referrer URLs.

When moving to production, replace the localhost/private referrer URL with a public GitHub repo or a link to your project website.

### Step 2: Exchange the code for a user-controlled API key

After the user logs in with OpenRouter, they are redirected back to your site with a `code` parameter in the URL:

![Alt text](file:92090898-e705-4e9b-a93d-dfdae073b6f4)

Extract this code using the browser API:

<CodeGroup>
  ```typescript title="Extract Code"
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  ```
</CodeGroup>

Then use it to make an API call to `https://openrouter.ai/api/v1/auth/keys` to exchange the code for a user-controlled API key:

<CodeGroup>
  ```typescript title="Exchange Code"
  const response = await fetch('https://openrouter.ai/api/v1/auth/keys', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code: '<CODE_FROM_QUERY_PARAM>',
      code_verifier: '<CODE_VERIFIER>', // If code_challenge was used
      code_challenge_method: '<CODE_CHALLENGE_METHOD>', // If code_challenge was used
    }),
  });

  const { key } = await response.json();
  ```
</CodeGroup>

And that's it for the PKCE flow!

### Step 3: Use the API key

Store the API key securely within the user's browser or in your own database, and use it to [make OpenRouter requests](/api-reference/completion).

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: key, // The key from Step 2
  });

  const completion = await openRouter.chat.send({
    model: 'openai/gpt-5.2',
    messages: [
      {
        role: 'user',
        content: 'Hello!',
      },
    ],
    stream: false,
  });

  console.log(completion.choices[0].message);
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openai/gpt-5.2',
      messages: [
        {
          role: 'user',
          content: 'Hello!',
        },
      ],
    }),
  });
  ```
</CodeGroup>

## Error Codes

* `400 Invalid code_challenge_method`: Make sure you're using the same code challenge method in step 1 as in step 2.
* `403 Invalid code or code_verifier`: Make sure your user is logged in to OpenRouter, and that `code_verifier` and `code_challenge_method` are correct.
* `405 Method Not Allowed`: Make sure you're using `POST` and `HTTPS` for your request.

## External Tools

* [PKCE Tools](https://example-app.com/pkce)
* [Online PKCE Generator](https://tonyxu-io.github.io/pkce-generator/)
***

title: Management API Keys
subtitle: Manage API keys programmatically
headline: Management API Keys | Programmatic Control of OpenRouter API Keys
canonical-url: '[https://openrouter.ai/docs/guides/overview/auth/management-api-keys](https://openrouter.ai/docs/guides/overview/auth/management-api-keys)'
'og:site\_name': OpenRouter Documentation
'og:title': Management API Keys - Programmatic Control of OpenRouter API Keys
'og:description': >-
Manage OpenRouter API keys programmatically through dedicated management
endpoints. Create, read, update, and delete API keys for automated key
distribution and control.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?pathname=features/management-api-keys\&title=Management%20API%20Keys\&description=Programmatically%20manage%20OpenRouter%20API%20keys](https://openrouter.ai/dynamic-og?pathname=features/management-api-keys\&title=Management%20API%20Keys\&description=Programmatically%20manage%20OpenRouter%20API%20keys)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

OpenRouter provides endpoints to programmatically manage your API keys, enabling key creation and management for applications that need to distribute or rotate keys automatically.

## Creating a Management API Key

To use the key management API, you first need to create a Management API key:

1. Go to the [Management API Keys page](https://openrouter.ai/settings/management-keys)
2. Click "Create New Key"
3. Complete the key creation process

Management keys cannot be used to make API calls to OpenRouter's completion endpoints - they are exclusively for administrative operations.

## Use Cases

Common scenarios for programmatic key management include:

* **SaaS Applications**: Automatically create unique API keys for each customer instance
* **Key Rotation**: Regularly rotate API keys for security compliance
* **Usage Monitoring**: Track key usage and automatically disable keys that exceed limits (with optional daily/weekly/monthly limit resets)

## Example Usage

All key management endpoints are under `/api/v1/keys` and require a Management API key in the Authorization header.

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: 'your-management-key', // Use your Management API key
  });

  // List the most recent 100 API keys
  const keys = await openRouter.apiKeys.list();

  // You can paginate using the offset parameter
  const keysPage2 = await openRouter.apiKeys.list({ offset: 100 });

  // Create a new API key
  const newKey = await openRouter.apiKeys.create({
    name: 'Customer Instance Key',
    limit: 1000, // Optional credit limit
  });

  // Get a specific key
  const keyHash = '<YOUR_KEY_HASH>';
  const key = await openRouter.apiKeys.get(keyHash);

  // Update a key
  const updatedKey = await openRouter.apiKeys.update(keyHash, {
    name: 'Updated Key Name',
    disabled: true, // Optional: Disable the key
    includeByokInLimit: false, // Optional: control BYOK usage in limit
    limitReset: 'daily', // Optional: reset limit every day at midnight UTC
  });

  // Delete a key
  await openRouter.apiKeys.delete(keyHash);
  ```

  ```python title="Python"
  import requests

  MANAGEMENT_API_KEY = "your-management-key"
  BASE_URL = "https://openrouter.ai/api/v1/keys"

  # List the most recent 100 API keys
  response = requests.get(
      BASE_URL,
      headers={
          "Authorization": f"Bearer {MANAGEMENT_API_KEY}",
          "Content-Type": "application/json"
      }
  )

  # You can paginate using the offset parameter
  response = requests.get(
      f"{BASE_URL}?offset=100",
      headers={
          "Authorization": f"Bearer {MANAGEMENT_API_KEY}",
          "Content-Type": "application/json"
      }
  )

  # Create a new API key
  response = requests.post(
      f"{BASE_URL}/",
      headers={
          "Authorization": f"Bearer {MANAGEMENT_API_KEY}",
          "Content-Type": "application/json"
      },
      json={
          "name": "Customer Instance Key",
          "limit": 1000  # Optional credit limit
      }
  )

  # Get a specific key
  key_hash = "<YOUR_KEY_HASH>"
  response = requests.get(
      f"{BASE_URL}/{key_hash}",
      headers={
          "Authorization": f"Bearer {MANAGEMENT_API_KEY}",
          "Content-Type": "application/json"
      }
  )

  # Update a key
  response = requests.patch(
      f"{BASE_URL}/{key_hash}",
      headers={
          "Authorization": f"Bearer {MANAGEMENT_API_KEY}",
          "Content-Type": "application/json"
      },
      json={
          "name": "Updated Key Name",
          "disabled": True,  # Optional: Disable the key
          "include_byok_in_limit": False,  # Optional: control BYOK usage in limit
          "limit_reset": "daily"  # Optional: reset limit every day at midnight UTC
      }
  )

  # Delete a key
  response = requests.delete(
      f"{BASE_URL}/{key_hash}",
      headers={
          "Authorization": f"Bearer {MANAGEMENT_API_KEY}",
          "Content-Type": "application/json"
      }
  )
  ```

  ```typescript title="TypeScript (fetch)"
  const MANAGEMENT_API_KEY = 'your-management-key';
  const BASE_URL = 'https://openrouter.ai/api/v1/keys';

  // List the most recent 100 API keys
  const listKeys = await fetch(BASE_URL, {
    headers: {
      Authorization: `Bearer ${MANAGEMENT_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  // You can paginate using the `offset` query parameter
  const listKeys = await fetch(`${BASE_URL}?offset=100`, {
    headers: {
      Authorization: `Bearer ${MANAGEMENT_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  // Create a new API key
  const createKey = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${MANAGEMENT_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Customer Instance Key',
      limit: 1000, // Optional credit limit
    }),
  });

  // Get a specific key
  const keyHash = '<YOUR_KEY_HASH>';
  const getKey = await fetch(`${BASE_URL}/${keyHash}`, {
    headers: {
      Authorization: `Bearer ${MANAGEMENT_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  // Update a key
  const updateKey = await fetch(`${BASE_URL}/${keyHash}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${MANAGEMENT_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Updated Key Name',
      disabled: true, // Optional: Disable the key
      include_byok_in_limit: false, // Optional: control BYOK usage in limit
      limit_reset: 'daily', // Optional: reset limit every day at midnight UTC
    }),
  });

  // Delete a key
  const deleteKey = await fetch(`${BASE_URL}/${keyHash}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${MANAGEMENT_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });
  ```
</CodeGroup>

## Response Format

API responses return JSON objects containing key information:

```json
{
  "data": [
    {
      "created_at": "2025-02-19T20:52:27.363244+00:00",
      "updated_at": "2025-02-19T21:24:11.708154+00:00",
      "hash": "<YOUR_KEY_HASH>",
      "label": "sk-or-v1-abc...123",
      "name": "Customer Key",
      "disabled": false,
      "limit": 10,
      "limit_remaining": 10,
      "limit_reset": null,
      "include_byok_in_limit": false,
      "usage": 0,
      "usage_daily": 0,
      "usage_weekly": 0,
      "usage_monthly": 0,
      "byok_usage": 0,
      "byok_usage_daily": 0,
      "byok_usage_weekly": 0,
      "byok_usage_monthly": 0
    }
  ]
}
```

When creating a new key, the response will include the key string itself. Read more in the [API reference](/docs/api-reference/api-keys/create-api-key).
***

title: BYOK
subtitle: Bring your own provider API keys
headline: BYOK | Use Your Own Provider Keys with OpenRouter
canonical-url: '[https://openrouter.ai/docs/guides/overview/auth/byok](https://openrouter.ai/docs/guides/overview/auth/byok)'
'og:site\_name': OpenRouter Documentation
'og:title': BYOK - Bring Your Own Keys to OpenRouter
'og:description': >-
Learn how to use your existing AI provider keys with OpenRouter. Integrate
your own API keys while leveraging OpenRouter's unified interface and
features.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=BYOK\&description=Bring%20Your%20Own%20Keys%20to%20OpenRouter](https://openrouter.ai/dynamic-og?title=BYOK\&description=Bring%20Your%20Own%20Keys%20to%20OpenRouter)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

## Bring your own API Keys

OpenRouter supports both OpenRouter credits and the option to bring your own provider keys (BYOK).

When you use OpenRouter credits, your rate limits for each provider are managed by OpenRouter.

Using provider keys enables direct control over rate limits and costs via your provider account.

Your provider keys are securely encrypted and used for all requests routed through the specified provider.

Manage keys in your [account settings](/settings/integrations).

The cost of using custom provider keys on OpenRouter is **{bn(openRouterBYOKFee.fraction).times(100).toString()}% of what the same model/provider would cost normally on OpenRouter** and will be deducted from your OpenRouter credits.
This fee is waived for the first {toHumanNumber(BYOK_FEE_MONTHLY_REQUEST_THRESHOLD)} BYOK requests per-month.

### Key Priority and Fallback

OpenRouter always prioritizes using your provider keys when available. By default, if your key encounters a rate limit or failure, OpenRouter will fall back to using shared OpenRouter credits.

You can configure individual keys with "Always use this key" to prevent any fallback to OpenRouter credits. When this option is enabled, OpenRouter will only use your key for requests to that provider, which may result in rate limit errors if your key is exhausted, but ensures all requests go through your account.

### BYOK with Provider Ordering

When you combine BYOK keys with [provider ordering](/docs/features/provider-routing#ordering-specific-providers), OpenRouter **always prioritizes BYOK endpoints first**, regardless of where that provider appears in your specified order. After all BYOK endpoints are exhausted, OpenRouter falls back to shared capacity in the order you specified.

This means BYOK keys effectively override your provider ordering for the initial routing attempts. There is currently no way to change this behavior.

For example, if you have BYOK keys for Amazon Bedrock, Google Vertex AI, and Anthropic, and you send a request with:

```json
{
  "provider": {
    "allow_fallbacks": true,
    "order": ["amazon-bedrock", "google-vertex", "anthropic"]
  }
}
```

The routing order will be:

1. Amazon Bedrock (your BYOK key)
2. Google Vertex AI (your BYOK key)
3. Anthropic (your BYOK key)
4. Amazon Bedrock (OpenRouter's shared capacity)
5. Google Vertex AI (OpenRouter's shared capacity)
6. Anthropic (OpenRouter's shared capacity)

#### Partial BYOK with Provider Ordering

If you only have a BYOK key for some of the providers in your order, the BYOK provider is still tried first. For example, if you specify `order: ["amazon-bedrock", "google-vertex"]` but only have a BYOK key for Google Vertex AI:

```json
{
  "provider": {
    "allow_fallbacks": true,
    "order": ["amazon-bedrock", "google-vertex"]
  }
}
```

The routing order will be:

1. Google Vertex AI (your BYOK key)
2. Amazon Bedrock (OpenRouter's shared capacity)
3. Google Vertex AI (OpenRouter's shared capacity)

Note that even though Amazon Bedrock is listed first in the `order` array, the Google Vertex AI BYOK endpoint takes priority.

If you want to prevent fallback to OpenRouter's shared capacity entirely, configure your API key with "Always use this key" in your [account settings](/settings/integrations).

### Multiple BYOK Keys for the Same Provider

If you have multiple BYOK keys configured for the same provider, all of them will be used for routing. However, the order in which multiple keys for the same provider are tried is not guaranteed. If deterministic ordering between keys matters for your use case, consider using separate provider accounts or contacting support.

### Azure API Keys

To use Azure AI Services with OpenRouter, you'll need to provide your Azure API key configuration in JSON format. Each key configuration requires the following fields:

```json
{
  "model_slug": "the-openrouter-model-slug",
  "endpoint_url": "https://<resource>.services.ai.azure.com/deployments/<model-id>/chat/completions?api-version=<api-version>",
  "api_key": "your-azure-api-key",
  "model_id": "the-azure-model-id"
}
```

You can find these values in your Azure AI Services resource:

1. **endpoint\_url**: Navigate to your Azure AI Services resource in the Azure portal. In the "Overview" section, you'll find your endpoint URL. Make sure to append `/chat/completions` to the base URL. You can read more in the [Azure Foundry documentation](https://learn.microsoft.com/en-us/azure/ai-foundry/model-inference/concepts/endpoints?tabs=python).

2. **api\_key**: In the same "Overview" section of your Azure AI Services resource, you can find your API key under "Keys and Endpoint".

3. **model\_id**: This is the name of your model deployment in Azure AI Services.

4. **model\_slug**: This is the OpenRouter model identifier you want to use this key for.

Since Azure supports multiple model deployments, you can provide an array of configurations for different models:

```json
[
  {
    "model_slug": "mistralai/mistral-large",
    "endpoint_url": "https://example-project.openai.azure.com/openai/deployments/mistral-large/chat/completions?api-version=2024-08-01-preview",
    "api_key": "your-azure-api-key",
    "model_id": "mistral-large"
  },
  {
    "model_slug": "openai/gpt-5.2",
    "endpoint_url": "https://example-project.openai.azure.com/openai/deployments/gpt-5.2/chat/completions?api-version=2024-08-01-preview",
    "api_key": "your-azure-api-key",
    "model_id": "gpt-5.2"
  }
]
```

Make sure to replace the url with your own project url. Also the url should end with /chat/completions with the api version that you would like to use.

### AWS Bedrock API Keys

To use Amazon Bedrock with OpenRouter, you can authenticate using either Bedrock API keys or traditional AWS credentials.

#### Option 1: Bedrock API Keys (Recommended)

Amazon Bedrock API keys provide a simpler authentication method. Simply provide your Bedrock API key as a string:

```
your-bedrock-api-key-here
```

**Note:** Bedrock API keys are tied to a specific AWS region and cannot be used to change regions. If you need to use models in different regions, use the AWS credentials option below.

You can generate Bedrock API keys in the AWS Management Console. Learn more in the [Amazon Bedrock API keys documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/api-keys.html).

#### Option 2: AWS Credentials

Alternatively, you can use traditional AWS credentials in JSON format. This option allows you to specify the region and provides more flexibility:

```json
{
  "accessKeyId": "your-aws-access-key-id",
  "secretAccessKey": "your-aws-secret-access-key",
  "region": "your-aws-region"
}
```

You can find these values in your AWS account:

1. **accessKeyId**: This is your AWS Access Key ID. You can create or find your access keys in the AWS Management Console under "Security Credentials" in your AWS account.

2. **secretAccessKey**: This is your AWS Secret Access Key, which is provided when you create an access key.

3. **region**: The AWS region where your Amazon Bedrock models are deployed (e.g., "us-east-1", "us-west-2").

Make sure your AWS IAM user or role has the necessary permissions to access Amazon Bedrock services. At minimum, you'll need permissions for:

* `bedrock:InvokeModel`
* `bedrock:InvokeModelWithResponseStream` (for streaming responses)

Example IAM policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "bedrock:InvokeModel",
        "bedrock:InvokeModelWithResponseStream"
      ],
      "Resource": "*"
    }
  ]
}
```

For enhanced security, we recommend creating dedicated IAM users with limited permissions specifically for use with OpenRouter.

Learn more in the [AWS Bedrock Getting Started with the API](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started-api.html) documentation, [IAM Permissions Setup](https://docs.aws.amazon.com/bedrock/latest/userguide/security-iam.html) guide, or the [AWS Bedrock API Reference](https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html).

### Google Vertex API Keys

To use Google Vertex AI with OpenRouter, you'll need to provide your Google Cloud service account key in JSON format. The service account key should include all standard Google Cloud service account fields, with an optional `region` field for specifying the deployment region.

```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "your-private-key-id",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "your-service-account@your-project.iam.gserviceaccount.com",
  "client_id": "your-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/your-service-account@your-project.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com",
  "region": "global"
}
```

You can find these values in your Google Cloud Console:

1. **Service Account Key**: Navigate to the Google Cloud Console, go to "IAM & Admin" > "Service Accounts", select your service account, and create/download a JSON key.

2. **region** (optional): Specify the region for your Vertex AI deployment. Use `"global"` to allow requests to run in any available region, or specify a specific region like `"us-central1"` or `"europe-west1"`.

Make sure your service account has the necessary permissions to access Vertex AI services:

* `aiplatform.endpoints.predict`
* `aiplatform.endpoints.streamingPredict` (for streaming responses)

Example IAM policy:

```json
{
  "bindings": [
    {
      "role": "roles/aiplatform.user",
      "members": [
        "serviceAccount:your-service-account@your-project.iam.gserviceaccount.com"
      ]
    }
  ]
}
```

Learn more in the [Google Cloud Vertex AI documentation](https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform) and [Service Account setup guide](https://cloud.google.com/iam/docs/service-accounts-create).

### Debugging BYOK Issues

If your BYOK requests fail, you can debug the issue by viewing provider responses on the Activity page.

#### Viewing Provider Responses

1. Navigate to your [Activity page](https://openrouter.ai/activity) in the OpenRouter dashboard.
2. Find the generation you want to debug and click on it to view the details.
3. Click "View Raw Metadata" to display the raw metadata in JSON format.
4. In the JSON, look for the `provider_responses` field, which shows the HTTP status code from each provider attempt.

The `provider_responses` field contains an array of responses from each provider attempted during routing. Each entry includes the provider name and HTTP status code, which can help you identify permission issues, rate limits, or other errors.

#### Common BYOK Error Codes

When debugging BYOK issues, look for these common HTTP status codes in the provider responses:

* **400 Bad Request**: The request format was invalid for the provider. Check that your model and key configuration is correct.
* **401 Unauthorized**: Your API key is invalid or has been revoked. Verify your key in your provider's console.
* **403 Forbidden**: Your API key doesn't have permission to access the requested resource. For AWS Bedrock, ensure your IAM policy includes the required `bedrock:InvokeModel` permissions. For Google Vertex, verify your service account has `aiplatform.endpoints.predict` permissions.
* **429 Too Many Requests**: You've hit the rate limit on your provider account. Check your provider's rate limit settings or wait before retrying.
* **500 Server Error**: The provider encountered an internal error. This is typically a temporary issue on the provider's side.

#### Debugging Permission Issues

If you encounter 403 errors with BYOK, the issue is often related to permissions. For AWS Bedrock, verify that:

1. Your IAM user/role has the `bedrock:InvokeModel` and `bedrock:InvokeModelWithResponseStream` permissions.
2. The model you're trying to access is enabled in your AWS account for the specified region.
3. Your credentials (access key and secret) are correct and active.

For Google Vertex, verify that your service account has `aiplatform.endpoints.predict` permissions.

You can test your provider permissions directly in the provider's console (AWS Console, Google Cloud Console, etc.) by attempting to invoke the model there first.
***

title: Frequently Asked Questions
subtitle: Common questions about OpenRouter
slug: faq
headline: OpenRouter FAQ | Developer Documentation
canonical-url: '[https://openrouter.ai/docs/faq](https://openrouter.ai/docs/faq)'
'og:site\_name': OpenRouter Documentation
'og:title': OpenRouter FAQ
'og:description': >-
Find answers to commonly asked questions about OpenRouter's unified API, model
access, pricing, and integration.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?pathname=faq\&title=FAQ\&description=Common%20questions%20about%20OpenRouter](https://openrouter.ai/dynamic-og?pathname=faq\&title=FAQ\&description=Common%20questions%20about%20OpenRouter)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

## Getting started

<AccordionGroup>
  <Accordion title="Why should I use OpenRouter?">
    OpenRouter provides a unified API to access all the major LLM models on the
    market. It also allows users to aggregate their billing in one place and
    keep track of all of their usage using our analytics.

    OpenRouter passes through the pricing of the underlying providers, while pooling their uptime,
    so you get the same pricing you'd get from the provider directly, with a
    unified API and fallbacks so that you get much better uptime.

    [Learn more in our Quickstart guide](/docs/quickstart).
  </Accordion>

  <Accordion title="How do I get started with OpenRouter?">
    To get started, create an account and add credits on the
    [Credits](https://openrouter.ai/settings/credits) page. Credits are simply
    deposits on OpenRouter that you use for LLM inference.
    When you use the API or chat interface, we deduct the request cost from your
    credits. Each model and provider has a different price per million tokens.

    Once you have credits you can either use the chat room, or create API keys
    and start using the API. You can read our [quickstart](/docs/quickstart)
    or [enterprise](/docs/enterprise-quickstart) guide for code samples and more.
  </Accordion>

  <Accordion title="How do I get support?">
    The best way to get technical support is to join our
    [Discord](https://discord.gg/openrouter) and ask the community in the #help forum.

    For billing and account management questions, please contact us at [support@openrouter.ai](mailto:support@openrouter.ai).
  </Accordion>

  <Accordion title="How do I get billed for my usage on OpenRouter?">
    For each model we have the pricing displayed per million tokens. There is
    usually a different price for prompt and completion tokens. There are also
    models that charge per request, for images and for reasoning tokens. All of
    these details will be visible on the models page.

    When you make a request to OpenRouter, we receive the total number of tokens processed
    by the provider. We then calculate the corresponding cost and deduct it from your credits.
    You can review your complete usage history in the [Activity tab](https://openrouter.ai/activity).

    We pass through the pricing of the underlying providers; there is no markup
    on inference pricing (however we do charge a [fee](/docs/faq#pricing-and-fees) when purchasing credits).
  </Accordion>
</AccordionGroup>

## Pricing and Fees

<AccordionGroup>
  <Accordion title="What are the fees for using OpenRouter?">
    OpenRouter charges a {getTotalFeeString('stripe', null)} fee when you purchase credits. We pass through
    the pricing of the underlying model providers without any markup, so you pay
    the same rate as you would directly with the provider.

    Crypto payments are charged a fee of {getTotalFeeString('coinbase', null)}.
  </Accordion>

  <Accordion title="Is there a fee for using my own provider keys (BYOK)?">
    Yes, if you choose to use your own provider API keys (Bring Your Own Key -
    BYOK), the first {toHumanNumber(BYOK_FEE_MONTHLY_REQUEST_THRESHOLD)} BYOK
    requests per-month are free, and for all subsequent usage there is a fee
    of {bn(openRouterBYOKFee.fraction).times(100).toString()}% of what the same
    model and provider would normally cost on OpenRouter. This fee is deducted
    from your OpenRouter credits. This allows you to manage your rate limits and
    costs directly with the provider while still leveraging OpenRouter's unified
    interface.

    [Learn more about BYOK](/docs/guides/overview/auth/byok).
  </Accordion>
</AccordionGroup>

## Models and Providers

<AccordionGroup>
  <Accordion title="What LLM models does OpenRouter support?">
    OpenRouter provides access to a wide variety of LLM models, including frontier models from major AI labs.
    For a complete list of models you can visit the [models browser](https://openrouter.ai/models) or fetch the list through the [models api](https://openrouter.ai/api/v1/models).
  </Accordion>

  <Accordion title="How frequently are new models added?">
    We work on adding models as quickly as we can. We often have partnerships with
    the labs releasing models and can release models as soon as they are
    available. If there is a model missing that you'd like OpenRouter to support, feel free to message us on
    [Discord](https://discord.gg/openrouter).
  </Accordion>

  <Accordion title="What are model variants?">
    Variants are suffixes that can be added to the model slug to change its behavior.

    Static variants can only be used with specific models and these are listed in our [models api](https://openrouter.ai/api/v1/models).

    1. `:free` - The model is always provided for free and has low rate limits. [Learn more](/docs/guides/routing/model-variants/free).
    2. `:extended` - The model has longer than usual context length. [Learn more](/docs/guides/routing/model-variants/extended).
    3. `:exacto` - The model only uses OpenRouter-curated high-quality endpoints. [Learn more](/docs/guides/routing/model-variants/exacto).
    4. `:thinking` - The model supports reasoning by default. [Learn more](/docs/guides/routing/model-variants/thinking).

    Dynamic variants can be used on all models and they change the behavior of how the request is routed or used.

    1. `:online` - All requests will run a query to extract web results that are attached to the prompt. [Learn more](/docs/guides/routing/model-variants/online).
    2. `:nitro` - Providers will be sorted by throughput rather than the default sort, optimizing for faster response times. [Learn more](/docs/features/provider-routing#nitro-shortcut).
    3. `:floor` - Providers will be sorted by price rather than the default sort, prioritizing the most cost-effective options. [Learn more](/docs/features/provider-routing#floor-price-shortcut).
  </Accordion>

  <Accordion title="I am an inference provider, how can I get listed on OpenRouter?">
    You can read our requirements at the [Providers
    page](/docs/use-cases/for-providers). If you would like to contact us, the best
    place to reach us is over email.
  </Accordion>

  <Accordion title="What is the expected latency/response time for different models?">
    For each model on OpenRouter we show the latency (time to first token) and the token
    throughput for all providers. You can use this to estimate how long requests
    will take. If you would like to optimize for throughput you can use the
    `:nitro` variant to route to the fastest provider.
  </Accordion>

  <Accordion title="How does model fallback work if a provider is unavailable?">
    If a provider returns an error OpenRouter will automatically fall back to the
    next provider. This happens transparently to the user and allows production
    apps to be much more resilient. OpenRouter has a lot of options to configure
    the provider routing behavior. The full documentation can be found [here](/docs/features/provider-routing).
  </Accordion>
</AccordionGroup>

## API Technical Specifications

<AccordionGroup>
  <Accordion title="What authentication methods are supported?">
    OpenRouter uses three authentication methods:

    1. Cookie-based authentication for the web interface and chatroom
    2. API keys (passed as Bearer tokens) for accessing the completions API and other core endpoints
    3. [Management API keys](/docs/guides/overview/auth/management-api-keys) for programmatically managing API keys through the key management endpoints

    [Learn more about API authentication](/docs/api/reference/authentication).
  </Accordion>

  <Accordion title="How are rate limits calculated?">
    For free models, rate limits are determined by the credits that you have purchased.
    If you have purchased at least {FREE_MODEL_CREDITS_THRESHOLD} credits, your free model rate limit will be {FREE_MODEL_HAS_CREDITS_RPD} requests per day.
    Otherwise, you will be rate limited to {FREE_MODEL_NO_CREDITS_RPD} free model API requests per day.

    You can learn more about how rate limits work for paid accounts in our [rate limits documentation](/docs/api-reference/limits).
  </Accordion>

  <Accordion title="What API endpoints are available?">
    OpenRouter implements the OpenAI API specification for /completions and
    /chat/completions endpoints, allowing you to use any model with the same
    request/response format. Additional endpoints like /api/v1/models are also
    available. See our [API documentation](/docs/api-reference/overview) for
    detailed specifications.
  </Accordion>

  <Accordion title="What are the supported formats?">
    The API supports text, images, and PDFs.
    [Images](/docs/guides/overview/multimodal/images) can be passed as
    URLs or base64 encoded images. [PDFs](/docs/guides/overview/multimodal/pdfs) can also be sent as URLs or base64 encoded data, and work with any model on OpenRouter.
  </Accordion>

  <Accordion title="How does streaming work?">
    Streaming uses server-sent events (SSE) for real-time token delivery. Set
    `stream: true` in your request to enable streaming responses.

    [Learn more about streaming](/docs/api/reference/streaming).
  </Accordion>

  <Accordion title="What SDK support is available?">
    OpenRouter is a drop-in replacement for OpenAI. Therefore, any SDKs that
    support OpenAI by default also support OpenRouter. Check out our
    [OpenAI SDK docs](/docs/community/open-ai-sdk) for more details.

    [See all supported frameworks and integrations](/docs/guides/community/frameworks-and-integrations-overview).
  </Accordion>
</AccordionGroup>

## Privacy and Data Logging

Please see our [Terms of Service](https://openrouter.ai/terms) and [Privacy Policy](https://openrouter.ai/privacy).

<AccordionGroup>
  <Accordion title="What data is logged during API use?">
    We log basic request metadata (timestamps, model used, token counts). Prompt
    and completion are not logged by default. We do zero logging of your prompts/completions,
    even if an error occurs, unless you opt-in to logging them.

    We have an opt-in [setting](https://openrouter.ai/settings/privacy) that
    lets users opt-in to log their prompts and completions in exchange for a 1%
    discount on usage costs.

    [Learn more about data collection](/docs/guides/privacy/data-collection).
  </Accordion>

  <Accordion title="What data is logged during Chatroom use?">
    The same data privacy applies to the chatroom as the API. All conversations
    in the chatroom are stored locally on your device. Conversations will not sync across devices.
    It is possible to export and import conversations using the settings menu in the chatroom.
  </Accordion>

  <Accordion title="What third-party sharing occurs?">
    OpenRouter is a proxy that sends your requests to the model provider for it to be completed.
    We work with all providers to, when possible, ensure that prompts and completions are not logged or used for training.
    Providers that do log, or where we have been unable to confirm their policy, will not be routed to unless the model training
    toggle is switched on in the [privacy settings](https://openrouter.ai/settings/privacy) tab.

    If you specify [provider routing](/docs/features/provider-routing) in your request, but none of the providers
    match the level of privacy specified in your account settings, you will get an error and your request will not complete.

    [Learn more about provider logging policies](/docs/guides/privacy/logging).
  </Accordion>
</AccordionGroup>

## Credit and Billing Systems

<AccordionGroup>
  <Accordion title="What purchase options exist?">
    OpenRouter uses a credit system where the base currency is US dollars. All
    of the pricing on our site and API is denoted in dollars. Users can top up
    their balance manually or set up auto top up so that the balance is
    replenished when it gets below the set threshold.
  </Accordion>

  <Accordion title="Do credits expire?">
    Per our [terms](https://openrouter.ai/terms), we reserve the right to expire
    unused credits after one year of purchase.
  </Accordion>

  <Accordion title="My credits haven't showed up in my account">
    If you paid using Stripe, sometimes there is an issue with the Stripe
    integration and credits can get delayed in showing up on your account. Please allow up to one hour.
    If your credits still have not appeared after an hour, check to confirm you have not been charged and
    that you do not have a stripe receipt email. If you do not have a receipt email or have not been charged,
    your card may have been declined. Please try again with a different card or payment method.

    If you have been charged and still do not have credits, please reach out to us via email
    at [support@openrouter.ai](mailto:support@openrouter.ai) with details of the purchase.

    If you paid using crypto, please reach out to us via email at [support@openrouter.ai](mailto:support@openrouter.ai)
    and we will look into it.
  </Accordion>

  <Accordion title="What's the refund policy?">
    Refunds for unused Credits may be requested within twenty-four (24) hours from the time the transaction was processed. If no refund request is received within twenty-four (24) hours following the purchase, any unused Credits become non-refundable. To request a refund within the eligible period, you can use the refund button on the [Credits](https://openrouter.ai/settings/credits) page. The unused credit amount will be refunded to your payment method; the platform fees are non-refundable. Note that cryptocurrency payments are never refundable.
  </Accordion>

  <Accordion title="How to monitor credit usage?">
    The [Activity](https://openrouter.ai/activity) page allows users to view
    their historic usage and filter the usage by model, provider and api key.

    We also provide a [credits api](/docs/api-reference/get-credits) that has
    live information about the balance and remaining credits for the account.
  </Accordion>

  <Accordion title="What free tier options exist?">
    All new users receive a very small free allowance to be able to test out OpenRouter.
    There are many [free models](https://openrouter.ai/models?max_price=0) available
    on OpenRouter, it is important to note that these models have low rate limits ({FREE_MODEL_NO_CREDITS_RPD} requests per day total)
    and are usually not suitable for production use. If you have purchased at least {FREE_MODEL_CREDITS_THRESHOLD} credits,
    the free models will be limited to {FREE_MODEL_HAS_CREDITS_RPD} requests per day.

    You can also use the [Free Models Router](/docs/guides/guides/free-models-router-playground) (`openrouter/free`) to automatically select a free model for your requests.
  </Accordion>

  <Accordion title="How do volume discounts work?">
    OpenRouter does not currently offer volume discounts, but you can reach out to us
    over email if you think you have an exceptional use case.
  </Accordion>

  <Accordion title="What payment methods are accepted?">
    We accept all major credit cards, AliPay and cryptocurrency payments in
    USDC. We are working on integrating PayPal soon, if there are any payment
    methods that you would like us to support please reach out on [Discord](https://discord.gg/openrouter).
  </Accordion>

  <Accordion title="How does OpenRouter make money?">
    We charge a small [fee](/docs/faq#pricing-and-fees) when purchasing credits. We never mark-up the pricing
    of the underlying providers, and you'll always pay the same as the provider's
    listed price.
  </Accordion>
</AccordionGroup>

## Account Management

<AccordionGroup>
  <Accordion title="How can I delete my account?">
    Go to the [Settings](https://openrouter.ai/settings/preferences) page and click Manage Account.
    In the modal that opens, select the Security tab. You'll find an option there to delete your account.

    Note that unused credits will be lost and cannot be reclaimed if you delete and later recreate your account.
  </Accordion>

  <Accordion title="How does team access work?">
    Organization management information can be found in our [organization management documentation](/docs/use-cases/organization-management).
  </Accordion>

  <Accordion title="What analytics are available?">
    Our [activity dashboard](https://openrouter.ai/activity) provides real-time
    usage metrics. If you would like any specific reports or metrics please
    contact us.
  </Accordion>

  <Accordion title="How can I contact support?">
    For account and billing questions, please contact us at [support@openrouter.ai](mailto:support@openrouter.ai).
  </Accordion>

  <Accordion title="How can I file a bug report or change request for OpenRouter?">
    You can file bug reports or change requests by posting in our [Discord](https://discord.gg/openrouter).
  </Accordion>
</AccordionGroup>
***

title: Report Feedback
headline: Report Feedback | Submit Bug Reports on OpenRouter
canonical-url: '[https://openrouter.ai/docs/guides/guides/report-feedback](https://openrouter.ai/docs/guides/guides/report-feedback)'
'og:site\_name': OpenRouter Documentation
'og:title': Report Feedback - Submit Bug Reports for Generations
'og:description': >-
Learn how to report issues with AI generations on OpenRouter using the Report
Feedback feature in the Chatroom and Activity page.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Report%20Feedback\&description=Submit%20bug%20reports%20for%20generations](https://openrouter.ai/dynamic-og?title=Report%20Feedback\&description=Submit%20bug%20reports%20for%20generations)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

Help us improve OpenRouter by reporting issues with AI generations. You can submit feedback directly from the Chatroom or the Activity page.

## Overview

The Report Feedback feature allows you to flag problematic generations with a category and description. This helps our team identify and address issues with model responses, latency, billing, and more.

### Feedback Categories

When reporting feedback, select the category that best describes the issue:

* **Latency**: Response was slower than expected
* **Incoherence**: Response didn't make sense or was off-topic
* **Incorrect Response**: Response contained factual errors or wrong information
* **Formatting**: Response had formatting issues (markdown, code blocks, etc.)
* **Billing**: Unexpected charges or token counts
* **API Error**: Technical errors or failed requests
* **Other**: Any other issue not covered above

## Reporting from the Chatroom

In the Chatroom, you can report feedback on individual assistant messages:

1. Hover over an assistant message to reveal the action buttons
2. Click the bug icon to open the Report Feedback dialog
3. Select a category that describes the issue
4. Add a comment explaining what went wrong
5. Click **Submit** to send your feedback

The generation ID is automatically captured from the message, so you don't need to look it up.

## Reporting from the Activity Page

The Activity page offers two ways to report feedback:

### Per-Generation Feedback

Each row in your activity history has a feedback button:

1. Go to [openrouter.ai/activity](https://openrouter.ai/activity)
2. Find the generation you want to report
3. Click the bug icon on that row
4. Select a category and add your comment
5. Click **Submit**

### General Feedback Button

For reporting issues when you have a generation ID handy:

1. Go to [openrouter.ai/activity](https://openrouter.ai/activity)
2. Click the **Report Feedback** button in the header (top right)
3. Enter the generation ID (found in your API response or activity row)
4. Select a category and add your comment
5. Click **Submit**

<Note title="Finding Your Generation ID">
  The generation ID is returned in the API response under the `id` field. You can also find it by clicking on a row in the Activity page to view the generation details.
</Note>

## What Happens After You Submit

Your feedback is reviewed by our team to help improve:

* Model routing and provider selection
* Error handling and recovery
* Billing accuracy
* Overall platform reliability

We appreciate your help in making OpenRouter better for everyone.
***

title: Model Fallbacks
subtitle: Automatic failover between models
headline: Model Fallbacks | Reliable AI with Automatic Failover
canonical-url: '[https://openrouter.ai/docs/guides/routing/model-fallbacks](https://openrouter.ai/docs/guides/routing/model-fallbacks)'
'og:site\_name': OpenRouter Documentation
'og:title': Model Fallbacks - Automatic Failover Between Models
'og:description': >-
Configure automatic failover between AI models when providers are down,
rate-limited, or refuse requests.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Model%20Fallbacks\&description=Automatic%20failover%20between%20AI%20models](https://openrouter.ai/dynamic-og?title=Model%20Fallbacks\&description=Automatic%20failover%20between%20AI%20models)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

The `models` parameter lets you automatically try other models if the primary model's providers are down, rate-limited, or refuse to reply due to content moderation.

## How It Works

Provide an array of model IDs in priority order. If the first model returns an error, OpenRouter will automatically try the next model in the list.

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    models: ['anthropic/claude-3.5-sonnet', 'gryphe/mythomax-l2-13b'],
    messages: [
      {
        role: 'user',
        content: 'What is the meaning of life?',
      },
    ],
  });

  console.log(completion.choices[0].message.content);
  ```

  ```typescript title="TypeScript (fetch)"
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      models: ['anthropic/claude-3.5-sonnet', 'gryphe/mythomax-l2-13b'],
      messages: [
        {
          role: 'user',
          content: 'What is the meaning of life?',
        },
      ],
    }),
  });

  const data = await response.json();
  console.log(data.choices[0].message.content);
  ```

  ```python title="Python"
  import requests
  import json

  response = requests.post(
    url="https://openrouter.ai/api/v1/chat/completions",
    headers={
      "Authorization": "Bearer <OPENROUTER_API_KEY>",
      "Content-Type": "application/json",
    },
    data=json.dumps({
      "models": ["anthropic/claude-3.5-sonnet", "gryphe/mythomax-l2-13b"],
      "messages": [
        {
          "role": "user",
          "content": "What is the meaning of life?"
        }
      ]
    })
  )

  data = response.json()
  print(data['choices'][0]['message']['content'])
  ```
</CodeGroup>

## Fallback Behavior

If the model you selected returns an error, OpenRouter will try to use the fallback model instead. If the fallback model is down or returns an error, OpenRouter will return that error.

By default, any error can trigger the use of a fallback model, including:

* Context length validation errors
* Moderation flags for filtered models
* Rate-limiting
* Downtime

## Pricing

Requests are priced using the model that was ultimately used, which will be returned in the `model` attribute of the response body.

## Using with OpenAI SDK

To use the `models` array with the OpenAI SDK, include it in the `extra_body` parameter. In the example below, gpt-4o will be tried first, and the `models` array will be tried in order as fallbacks.

<Template
  data={{
  API_KEY_REF,
}}
>
  <CodeGroup>
    ```python
    from openai import OpenAI

    openai_client = OpenAI(
      base_url="https://openrouter.ai/api/v1",
      api_key={{API_KEY_REF}},
    )

    completion = openai_client.chat.completions.create(
        model="openai/gpt-4o",
        extra_body={
            "models": ["anthropic/claude-3.5-sonnet", "gryphe/mythomax-l2-13b"],
        },
        messages=[
            {
                "role": "user",
                "content": "What is the meaning of life?"
            }
        ]
    )

    print(completion.choices[0].message.content)
    ```

    ```typescript
    import OpenAI from 'openai';

    const openrouterClient = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: '{{API_KEY_REF}}',
    });

    async function main() {
      // @ts-expect-error
      const completion = await openrouterClient.chat.completions.create({
        model: 'openai/gpt-4o',
        models: ['anthropic/claude-3.5-sonnet', 'gryphe/mythomax-l2-13b'],
        messages: [
          {
            role: 'user',
            content: 'What is the meaning of life?',
          },
        ],
      });
      console.log(completion.choices[0].message);
    }

    main();
    ```
  </CodeGroup>
</Template>
***

title: Provider Routing
subtitle: Route requests to the best provider
headline: Provider Routing | Intelligent Multi-Provider Request Routing
canonical-url: '[https://openrouter.ai/docs/guides/routing/provider-selection](https://openrouter.ai/docs/guides/routing/provider-selection)'
'og:site\_name': OpenRouter Documentation
'og:title': Provider Routing - Smart Multi-Provider Request Management
'og:description': >-
Route AI model requests across multiple providers intelligently. Learn how to
optimize for cost, performance, and reliability with OpenRouter's provider
routing.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?pathname=features/provider-routing\&title=Smart%20Routing\&description=Optimize%20AI%20requests%20across%20providers%20for%20best%20performance](https://openrouter.ai/dynamic-og?pathname=features/provider-routing\&title=Smart%20Routing\&description=Optimize%20AI%20requests%20across%20providers%20for%20best%20performance)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

OpenRouter routes requests to the best available providers for your model. By default, [requests are load balanced](#price-based-load-balancing-default-strategy) across the top providers to maximize uptime.

You can customize how your requests are routed using the `provider` object in the request body for [Chat Completions](/docs/api-reference/chat-completion).

The `provider` object can contain the following fields:

| Field                      | Type              | Default | Description                                                                                                                                                      |
| -------------------------- | ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `order`                    | string\[]         | -       | List of provider slugs to try in order (e.g. `["anthropic", "openai"]`). [Learn more](#ordering-specific-providers)                                              |
| `allow_fallbacks`          | boolean           | `true`  | Whether to allow backup providers when the primary is unavailable. [Learn more](#disabling-fallbacks)                                                            |
| `require_parameters`       | boolean           | `false` | Only use providers that support all parameters in your request. [Learn more](#requiring-providers-to-support-all-parameters-beta)                                |
| `data_collection`          | "allow" \| "deny" | "allow" | Control whether to use providers that may store data. [Learn more](#requiring-providers-to-comply-with-data-policies)                                            |
| `zdr`                      | boolean           | -       | Restrict routing to only ZDR (Zero Data Retention) endpoints. [Learn more](#zero-data-retention-enforcement)                                                     |
| `enforce_distillable_text` | boolean           | -       | Restrict routing to only models that allow text distillation. [Learn more](#distillable-text-enforcement)                                                        |
| `only`                     | string\[]         | -       | List of provider slugs to allow for this request. [Learn more](#allowing-only-specific-providers)                                                                |
| `ignore`                   | string\[]         | -       | List of provider slugs to skip for this request. [Learn more](#ignoring-providers)                                                                               |
| `quantizations`            | string\[]         | -       | List of quantization levels to filter by (e.g. `["int4", "int8"]`). [Learn more](#quantization)                                                                  |
| `sort`                     | string \| object  | -       | Sort providers by price, throughput, or latency. Can be a string (e.g. `"price"`) or an object with `by` and `partition` fields. [Learn more](#provider-sorting) |
| `preferred_min_throughput` | number \| object  | -       | Preferred minimum throughput (tokens/sec). Can be a number or an object with percentile cutoffs (p50, p75, p90, p99). [Learn more](#performance-thresholds)      |
| `preferred_max_latency`    | number \| object  | -       | Preferred maximum latency (seconds). Can be a number or an object with percentile cutoffs (p50, p75, p90, p99). [Learn more](#performance-thresholds)            |
| `max_price`                | object            | -       | The maximum pricing you want to pay for this request. [Learn more](#maximum-price)                                                                               |

<Note title="EU data residency (Enterprise)">
  OpenRouter supports EU in-region routing for enterprise customers. When enabled, prompts and completions are processed entirely within the EU. Learn more in our [Privacy docs here](/docs/guides/privacy/logging#enterprise-eu-in-region-routing). To contact our enterprise team, [fill out this form](https://openrouter.ai/enterprise/form).
</Note>

## Price-Based Load Balancing (Default Strategy)

For each model in your request, OpenRouter's default behavior is to load balance requests across providers, prioritizing price.

If you are more sensitive to throughput than price, you can use the `sort` field to explicitly prioritize throughput.

<Tip>
  When you send a request with `tools` or `tool_choice`, OpenRouter will only
  route to providers that support tool use. Similarly, if you set a
  `max_tokens`, then OpenRouter will only route to providers that support a
  response of that length.
</Tip>

Here is OpenRouter's default load balancing strategy:

1. Prioritize providers that have not seen significant outages in the last 30 seconds.
2. For the stable providers, look at the lowest-cost candidates and select one weighted by inverse square of the price (example below).
3. Use the remaining providers as fallbacks.

<Note title="A Load Balancing Example">
  If Provider A costs \$1 per million tokens, Provider B costs \$2, and Provider C costs \$3, and Provider B recently saw a few outages.

  * Your request is routed to Provider A. Provider A is 9x more likely to be first routed to Provider A than Provider C because $(1 / 3^2 = 1/9)$ (inverse square of the price).
  * If Provider A fails, then Provider C will be tried next.
  * If Provider C also fails, Provider B will be tried last.
</Note>

If you have `sort` or `order` set in your provider preferences, load balancing will be disabled.

## Provider Sorting

As described above, OpenRouter load balances based on price, while taking uptime into account.

If you instead want to *explicitly* prioritize a particular provider attribute, you can include the `sort` field in the `provider` preferences. Load balancing will be disabled, and the router will try providers in order.

The three sort options are:

* `"price"`: prioritize lowest price
* `"throughput"`: prioritize highest throughput
* `"latency"`: prioritize lowest latency

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    model: 'meta-llama/llama-3.3-70b-instruct',
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      sort: 'throughput',
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': '<YOUR_SITE_URL>',
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-3.3-70b-instruct',
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        sort: 'throughput',
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'model': 'meta-llama/llama-3.3-70b-instruct',
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'sort': 'throughput',
    },
  })
  ```
</CodeGroup>

To *always* prioritize low prices, and not apply any load balancing, set `sort` to `"price"`.

To *always* prioritize low latency, and not apply any load balancing, set `sort` to `"latency"`.

## Nitro Shortcut

You can append `:nitro` to any model slug as a shortcut to sort by throughput. This is exactly equivalent to setting `provider.sort` to `"throughput"`.

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    model: 'meta-llama/llama-3.3-70b-instruct:nitro',
    messages: [{ role: 'user', content: 'Hello' }],
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': '<YOUR_SITE_URL>',
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-3.3-70b-instruct:nitro',
      messages: [{ role: 'user', content: 'Hello' }],
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'model': 'meta-llama/llama-3.3-70b-instruct:nitro',
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
  })
  ```
</CodeGroup>

## Floor Price Shortcut

You can append `:floor` to any model slug as a shortcut to sort by price. This is exactly equivalent to setting `provider.sort` to `"price"`.

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    model: 'meta-llama/llama-3.3-70b-instruct:floor',
    messages: [{ role: 'user', content: 'Hello' }],
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': '<YOUR_SITE_URL>',
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-3.3-70b-instruct:floor',
      messages: [{ role: 'user', content: 'Hello' }],
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'model': 'meta-llama/llama-3.3-70b-instruct:floor',
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
  })
  ```
</CodeGroup>

## Advanced Sorting with Partition

When using [model fallbacks](/docs/features/model-routing), the `sort` field can be specified as an object with additional options to control how endpoints are sorted across multiple models.

| Field            | Type   | Default   | Description                                                          |
| ---------------- | ------ | --------- | -------------------------------------------------------------------- |
| `sort.by`        | string | -         | The sorting strategy: `"price"`, `"throughput"`, or `"latency"`.     |
| `sort.partition` | string | `"model"` | How to group endpoints for sorting: `"model"` (default) or `"none"`. |

By default, when you specify multiple models (fallbacks), OpenRouter groups endpoints by model before sorting. This means the primary model's endpoints are always tried first, regardless of their performance characteristics. Setting `partition` to `"none"` removes this grouping, allowing endpoints to be sorted globally across all models.

To explicitly use the default behavior, set `partition: "model"`. For more details on how model fallbacks work, see [Model Fallbacks](/docs/guides/routing/model-fallbacks).

<Info>
  `preferred_max_latency` and `preferred_min_throughput` do *not* guarantee you will get a provider or model with this performance level. However, providers and models that hit your thresholds will be preferred. Specifying these preferences should therefore never prevent your request from being executed. This is different than `max_price`, which will prevent your request from running if the price is not available.
</Info>

### Use Case 1: Route to the Highest Throughput or Lowest Latency Model

When you have multiple acceptable models and want to use whichever has the best performance right now, use `partition: "none"` with throughput or latency sorting. This is useful when you care more about speed than using a specific model.

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    models: [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
      'google/gemini-3-flash-preview',
    ],
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      sort: {
        by: 'throughput',
        partition: 'none',
      },
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      models: [
        'anthropic/claude-sonnet-4.5',
        'openai/gpt-5-mini',
        'google/gemini-3-flash-preview',
      ],
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        sort: {
          by: 'throughput',
          partition: 'none',
        },
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'models': [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
      'google/gemini-3-flash-preview',
    ],
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'sort': {
        'by': 'throughput',
        'partition': 'none',
      },
    },
  })
  ```

  ```bash title="cURL"
  curl https://openrouter.ai/api/v1/chat/completions \
    -H "Authorization: Bearer <OPENROUTER_API_KEY>" \
    -H "Content-Type: application/json" \
    -d '{
      "models": [
        "anthropic/claude-sonnet-4.5",
        "openai/gpt-5-mini",
        "google/gemini-3-flash-preview"
      ],
      "messages": [{ "role": "user", "content": "Hello" }],
      "provider": {
        "sort": {
          "by": "throughput",
          "partition": "none"
        }
      }
    }'
  ```
</CodeGroup>

In this example, OpenRouter will route to whichever endpoint across all three models currently has the highest throughput, rather than always trying Claude first.

## Performance Thresholds

You can set minimum throughput or maximum latency thresholds to filter endpoints. Endpoints that don't meet these thresholds are deprioritized (moved to the end of the list) rather than excluded entirely.

| Field                      | Type             | Default | Description                                                                                                               |
| -------------------------- | ---------------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| `preferred_min_throughput` | number \| object | -       | Preferred minimum throughput in tokens per second. Can be a number (applies to p50) or an object with percentile cutoffs. |
| `preferred_max_latency`    | number \| object | -       | Preferred maximum latency in seconds. Can be a number (applies to p50) or an object with percentile cutoffs.              |

### How Percentiles Work

OpenRouter tracks latency and throughput metrics for each model and provider using percentile statistics calculated over a rolling 5-minute window. The available percentiles are:

* **p50** (median): 50% of requests perform better than this value
* **p75**: 75% of requests perform better than this value
* **p90**: 90% of requests perform better than this value
* **p99**: 99% of requests perform better than this value

Higher percentiles (like p90 or p99) give you more confidence about worst-case performance, while lower percentiles (like p50) reflect typical performance. For example, if a model and provider has a p90 latency of 2 seconds, that means 90% of requests complete in under 2 seconds.

When you specify multiple percentile cutoffs, all specified cutoffs must be met for a model and provider to be in the preferred group. This allows you to set both typical and worst-case performance requirements.

### When to Use Percentile Preferences

Percentile-based routing is useful when you need predictable performance characteristics:

* **Real-time applications**: Use p90 or p99 latency thresholds to ensure consistent response times for user-facing features
* **Batch processing**: Use p50 throughput thresholds when you care more about average performance than worst-case scenarios
* **SLA compliance**: Use multiple percentile cutoffs to ensure providers meet your service level agreements across different performance tiers
* **Cost optimization**: Combine with `sort: "price"` to get the cheapest provider that still meets your performance requirements

### Use Case 2: Find the Cheapest Model Meeting Performance Requirements

Combine `partition: "none"` with performance thresholds to find the cheapest option across multiple models that meets your performance requirements. This is useful when you have a performance floor but want to minimize costs.

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    models: [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
      'google/gemini-3-flash-preview',
    ],
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      sort: {
        by: 'price',
        partition: 'none',
      },
      preferredMinThroughput: {
        p90: 50, // Prefer providers with >50 tokens/sec for 90% of requests in last 5 minutes
      },
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      models: [
        'anthropic/claude-sonnet-4.5',
        'openai/gpt-5-mini',
        'google/gemini-3-flash-preview',
      ],
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        sort: {
          by: 'price',
          partition: 'none',
        },
        preferred_min_throughput: {
          p90: 50, // Prefer providers with >50 tokens/sec for 90% of requests in last 5 minutes
        },
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'models': [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
      'google/gemini-3-flash-preview',
    ],
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'sort': {
        'by': 'price',
        'partition': 'none',
      },
      'preferred_min_throughput': {
        'p90': 50, # Prefer providers with >50 tokens/sec for 90% of requests in last 5 minutes
      },
    },
  })
  ```

  ```bash title="cURL"
  curl https://openrouter.ai/api/v1/chat/completions \
    -H "Authorization: Bearer <OPENROUTER_API_KEY>" \
    -H "Content-Type: application/json" \
    -d '{
      "models": [
        "anthropic/claude-sonnet-4.5",
        "openai/gpt-5-mini",
        "google/gemini-3-flash-preview"
      ],
      "messages": [{ "role": "user", "content": "Hello" }],
      "provider": {
        "sort": {
          "by": "price",
          "partition": "none"
        },
        "preferred_min_throughput": {
          "p90": 50
        }
      }
    }'
  ```
</CodeGroup>

In this example, OpenRouter will find the cheapest model and provider across all three models that has at least 50 tokens/second throughput at the p90 level (meaning 90% of requests achieve this throughput or better). Models and providers below this threshold are still available as fallbacks if all preferred options fail.

You can also use `preferred_max_latency` to set a maximum acceptable latency:

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    models: [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
    ],
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      sort: {
        by: 'price',
        partition: 'none',
      },
      preferredMaxLatency: {
        p90: 3, // Prefer providers with <3 second latency for 90% of requests in last 5 minutes
      },
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      models: [
        'anthropic/claude-sonnet-4.5',
        'openai/gpt-5-mini',
      ],
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        sort: {
          by: 'price',
          partition: 'none',
        },
        preferred_max_latency: {
          p90: 3, // Prefer providers with <3 second latency for 90% of requests in last 5 minutes
        },
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'models': [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
    ],
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'sort': {
        'by': 'price',
        'partition': 'none',
      },
      'preferred_max_latency': {
        'p90': 3, # Prefer providers with <3 second latency for 90% of requests in last 5 minutes
      },
    },
  })
  ```

  ```bash title="cURL"
  curl https://openrouter.ai/api/v1/chat/completions \
    -H "Authorization: Bearer <OPENROUTER_API_KEY>" \
    -H "Content-Type: application/json" \
    -d '{
      "models": [
        "anthropic/claude-sonnet-4.5",
        "openai/gpt-5-mini"
      ],
      "messages": [{ "role": "user", "content": "Hello" }],
      "provider": {
        "sort": {
          "by": "price",
          "partition": "none"
        },
        "preferred_max_latency": {
          "p90": 3
        }
      }
    }'
  ```
</CodeGroup>

### Example: Using Multiple Percentile Cutoffs

You can specify multiple percentile cutoffs to set both typical and worst-case performance requirements. All specified cutoffs must be met for a model and provider to be in the preferred group.

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    model: 'deepseek/deepseek-v3.2',
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      preferredMaxLatency: {
        p50: 1, // Prefer providers with <1 second latency for 50% of requests in last 5 minutes
        p90: 3, // Prefer providers with <3 second latency for 90% of requests in last 5 minutes
        p99: 5, // Prefer providers with <5 second latency for 99% of requests in last 5 minutes
      },
      preferredMinThroughput: {
        p50: 100, // Prefer providers with >100 tokens/sec for 50% of requests in last 5 minutes
        p90: 50, // Prefer providers with >50 tokens/sec for 90% of requests in last 5 minutes
      },
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'deepseek/deepseek-v3.2',
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        preferred_max_latency: {
          p50: 1, // Prefer providers with <1 second latency for 50% of requests in last 5 minutes
          p90: 3, // Prefer providers with <3 second latency for 90% of requests in last 5 minutes
          p99: 5, // Prefer providers with <5 second latency for 99% of requests in last 5 minutes
        },
        preferred_min_throughput: {
          p50: 100, // Prefer providers with >100 tokens/sec for 50% of requests in last 5 minutes
          p90: 50, // Prefer providers with >50 tokens/sec for 90% of requests in last 5 minutes
        },
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'model': 'deepseek/deepseek-v3.2',
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'preferred_max_latency': {
        'p50': 1, # Prefer providers with <1 second latency for 50% of requests in last 5 minutes
        'p90': 3, # Prefer providers with <3 second latency for 90% of requests in last 5 minutes
        'p99': 5, # Prefer providers with <5 second latency for 99% of requests in last 5 minutes
      },
      'preferred_min_throughput': {
        'p50': 100, # Prefer providers with >100 tokens/sec for 50% of requests in last 5 minutes
        'p90': 50, # Prefer providers with >50 tokens/sec for 90% of requests in last 5 minutes
      },
    },
  })
  ```

  ```bash title="cURL"
  curl https://openrouter.ai/api/v1/chat/completions \
    -H "Authorization: Bearer <OPENROUTER_API_KEY>" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "deepseek/deepseek-v3.2",
      "messages": [{ "role": "user", "content": "Hello" }],
      "provider": {
        "preferred_max_latency": {
          "p50": 1,
          "p90": 3,
          "p99": 5
        },
        "preferred_min_throughput": {
          "p50": 100,
          "p90": 50
        }
      }
    }'
  ```
</CodeGroup>

### Use Case 3: Maximize BYOK Usage Across Models

If you use [Bring Your Own Key (BYOK)](/docs/guides/overview/auth/byok) and want to maximize usage of your own API keys, `partition: "none"` can help. When your primary model doesn't have a BYOK provider available, OpenRouter can route to a fallback model that does support BYOK.

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    models: [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
      'google/gemini-3-flash-preview',
    ],
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      sort: {
        by: 'price',
        partition: 'none',
      },
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      models: [
        'anthropic/claude-sonnet-4.5',
        'openai/gpt-5-mini',
        'google/gemini-3-flash-preview',
      ],
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        sort: {
          by: 'price',
          partition: 'none',
        },
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'models': [
      'anthropic/claude-sonnet-4.5',
      'openai/gpt-5-mini',
      'google/gemini-3-flash-preview',
    ],
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'sort': {
        'by': 'price',
        'partition': 'none',
      },
    },
  })
  ```

  ```bash title="cURL"
  curl https://openrouter.ai/api/v1/chat/completions \
    -H "Authorization: Bearer <OPENROUTER_API_KEY>" \
    -H "Content-Type: application/json" \
    -d '{
      "models": [
        "anthropic/claude-sonnet-4.5",
        "openai/gpt-5-mini",
        "google/gemini-3-flash-preview"
      ],
      "messages": [{ "role": "user", "content": "Hello" }],
      "provider": {
        "sort": {
          "by": "price",
          "partition": "none"
        }
      }
    }'
  ```
</CodeGroup>

In this example, if you have a BYOK key configured for OpenAI but not for Anthropic, OpenRouter can route to the GPT-4o endpoint using your own key even though Claude is listed first. Without `partition: "none"`, the router would always try Claude's endpoints first before falling back to GPT-4o.

<Note>
  BYOK endpoints are automatically prioritized when you have API keys configured for a provider. The `partition: "none"` setting allows this prioritization to work across model boundaries.
</Note>

## Ordering Specific Providers

You can set the providers that OpenRouter will prioritize for your request using the `order` field.

| Field   | Type      | Default | Description                                                              |
| ------- | --------- | ------- | ------------------------------------------------------------------------ |
| `order` | string\[] | -       | List of provider slugs to try in order (e.g. `["anthropic", "openai"]`). |

The router will prioritize providers in this list, and in this order, for the model you're using. If you don't set this field, the router will [load balance](#price-based-load-balancing-default-strategy) across the top providers to maximize uptime.

<Tip>
  You can use the copy button next to provider names on model pages to get the exact provider slug,
  including any variants like "/turbo". See [Targeting Specific Provider Endpoints](#targeting-specific-provider-endpoints) for details.
</Tip>

OpenRouter will try them one at a time and proceed to other providers if none are operational. If you don't want to allow any other providers, you should [disable fallbacks](#disabling-fallbacks) as well.

### Example: Specifying providers with fallbacks

This example skips over OpenAI (which doesn't host Mixtral), tries Together, and then falls back to the normal list of providers on OpenRouter:

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    model: 'mistralai/mixtral-8x7b-instruct',
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      order: ['openai', 'together'],
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': '<YOUR_SITE_URL>',
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'mistralai/mixtral-8x7b-instruct',
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        order: ['openai', 'together'],
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'model': 'mistralai/mixtral-8x7b-instruct',
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'order': ['openai', 'together'],
    },
  })
  ```
</CodeGroup>

### Example: Specifying providers with fallbacks disabled

Here's an example with `allow_fallbacks` set to `false` that skips over OpenAI (which doesn't host Mixtral), tries Together, and then fails if Together fails:

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    model: 'mistralai/mixtral-8x7b-instruct',
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      order: ['openai', 'together'],
      allowFallbacks: false,
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': '<YOUR_SITE_URL>',
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'mistralai/mixtral-8x7b-instruct',
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        order: ['openai', 'together'],
        allow_fallbacks: false,
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'model': 'mistralai/mixtral-8x7b-instruct',
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'order': ['openai', 'together'],
      'allow_fallbacks': False,
    },
  })
  ```
</CodeGroup>

## Targeting Specific Provider Endpoints

Each provider on OpenRouter may host multiple endpoints for the same model, such as a default endpoint and a specialized "turbo" endpoint. To target a specific endpoint, you can use the copy button next to the provider name on the model detail page to obtain the exact provider slug.

For example, DeepInfra offers DeepSeek R1 through multiple endpoints:

* Default endpoint with slug `deepinfra`
* Turbo endpoint with slug `deepinfra/turbo`

By copying the exact provider slug and using it in your request's `order` array, you can ensure your request is routed to the specific endpoint you want:

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    model: 'deepseek/deepseek-r1',
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      order: ['deepinfra/turbo'],
      allowFallbacks: false,
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': '<YOUR_SITE_URL>',
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'deepseek/deepseek-r1',
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        order: ['deepinfra/turbo'],
        allow_fallbacks: false,
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'model': 'deepseek/deepseek-r1',
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'order': ['deepinfra/turbo'],
      'allow_fallbacks': False,
    },
  })
  ```
</CodeGroup>

This approach is especially useful when you want to consistently use a specific variant of a model from a particular provider.

## Requiring Providers to Support All Parameters

You can restrict requests only to providers that support all parameters in your request using the `require_parameters` field.

| Field                | Type    | Default | Description                                                     |
| -------------------- | ------- | ------- | --------------------------------------------------------------- |
| `require_parameters` | boolean | `false` | Only use providers that support all parameters in your request. |

With the default routing strategy, providers that don't support all the [LLM parameters](/docs/api-reference/parameters) specified in your request can still receive the request, but will ignore unknown parameters. When you set `require_parameters` to `true`, the request won't even be routed to that provider.

### Example: Excluding providers that don't support JSON formatting

For example, to only use providers that support JSON formatting:

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      requireParameters: true,
    },
    responseFormat: { type: 'json_object' },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': '<YOUR_SITE_URL>',
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        require_parameters: true,
      },
      response_format: { type: 'json_object' },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'require_parameters': True,
    },
    'response_format': { 'type': 'json_object' },
  })
  ```
</CodeGroup>

## Requiring Providers to Comply with Data Policies

You can restrict requests only to providers that comply with your data policies using the `data_collection` field.

| Field             | Type              | Default | Description                                           |
| ----------------- | ----------------- | ------- | ----------------------------------------------------- |
| `data_collection` | "allow" \| "deny" | "allow" | Control whether to use providers that may store data. |

* `allow`: (default) allow providers which store user data non-transiently and may train on it
* `deny`: use only providers which do not collect user data

Some model providers may log prompts, so we display them with a **Data Policy** tag on model pages. This is not a definitive source of third party data policies, but represents our best knowledge.

<Tip title="Account-Wide Data Policy Filtering">
  This is also available as an account-wide setting in [your privacy
  settings](https://openrouter.ai/settings/privacy). You can disable third party
  model providers that store inputs for training.
</Tip>

### Example: Excluding providers that don't comply with data policies

To exclude providers that don't comply with your data policies, set `data_collection` to `deny`:

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      dataCollection: 'deny', // or "allow"
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': '<YOUR_SITE_URL>',
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        data_collection: 'deny', // or "allow"
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'data_collection': 'deny', # or "allow"
    },
  })
  ```
</CodeGroup>

## Zero Data Retention Enforcement

You can enforce Zero Data Retention (ZDR) on a per-request basis using the `zdr` parameter, ensuring your request only routes to endpoints that do not retain prompts.

| Field | Type    | Default | Description                                                   |
| ----- | ------- | ------- | ------------------------------------------------------------- |
| `zdr` | boolean | -       | Restrict routing to only ZDR (Zero Data Retention) endpoints. |

When `zdr` is set to `true`, the request will only be routed to endpoints that have a Zero Data Retention policy. When `zdr` is `false` or not provided, it has no effect on routing.

<Tip title="Account-Wide ZDR Setting">
  This is also available as an account-wide setting in [your privacy
  settings](https://openrouter.ai/settings/privacy). The per-request `zdr` parameter
  operates as an "OR" with your account-wide ZDR setting - if either is enabled, ZDR enforcement will be applied. The request-level parameter can only ensure ZDR is enabled, not override account-wide enforcement.
</Tip>

### Example: Enforcing ZDR for a specific request

To ensure a request only uses ZDR endpoints, set `zdr` to `true`:

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    model: 'gpt-4',
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      zdr: true,
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': '<YOUR_SITE_URL>',
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        zdr: true,
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'model': 'gpt-4',
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'zdr': True,
    },
  })
  ```
</CodeGroup>

This is useful for customers who don't want to globally enforce ZDR but need to ensure specific requests only route to ZDR endpoints.

## Distillable Text Enforcement

You can enforce distillable text filtering on a per-request basis using the `enforce_distillable_text` parameter, ensuring your request only routes to models where the author has allowed text distillation.

| Field                      | Type    | Default | Description                                                   |
| -------------------------- | ------- | ------- | ------------------------------------------------------------- |
| `enforce_distillable_text` | boolean | -       | Restrict routing to only models that allow text distillation. |

When `enforce_distillable_text` is set to `true`, the request will only be routed to models where the author has explicitly enabled text distillation. When `enforce_distillable_text` is `false` or not provided, it has no effect on routing.

This parameter is useful for applications that need to ensure their requests only use models that allow text distillation for training purposes, such as when building datasets for model fine-tuning or distillation workflows.

### Example: Enforcing distillable text for a specific request

To ensure a request only uses models that allow text distillation, set `enforce_distillable_text` to `true`:

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    model: 'meta-llama/llama-3.3-70b-instruct',
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      enforceDistillableText: true,
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': '<YOUR_SITE_URL>',
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-3.3-70b-instruct',
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        enforce_distillable_text: true,
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'model': 'meta-llama/llama-3.3-70b-instruct',
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'enforce_distillable_text': True,
    },
  })
  ```
</CodeGroup>

## Disabling Fallbacks

To guarantee that your request is only served by the top (lowest-cost) provider, you can disable fallbacks.

This is combined with the `order` field from [Ordering Specific Providers](#ordering-specific-providers) to restrict the providers that OpenRouter will prioritize to just your chosen list.

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      allowFallbacks: false,
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': '<YOUR_SITE_URL>',
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        allow_fallbacks: false,
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'allow_fallbacks': False,
    },
  })
  ```
</CodeGroup>

## Allowing Only Specific Providers

You can allow only specific providers for a request by setting the `only` field in the `provider` object.

| Field  | Type      | Default | Description                                       |
| ------ | --------- | ------- | ------------------------------------------------- |
| `only` | string\[] | -       | List of provider slugs to allow for this request. |

<Warning>
  Only allowing some providers may significantly reduce fallback options and
  limit request recovery.
</Warning>

<Tip title="Account-Wide Allowed Providers">
  You can allow providers for all account requests in your [privacy settings](/settings/privacy). This configuration applies to all API requests and chatroom messages.

  Note that when you allow providers for a specific request, the list of allowed providers is merged with your account-wide allowed providers.
</Tip>

### Example: Allowing Azure for a request calling GPT-4 Omni

Here's an example that will only use Azure for a request calling GPT-4 Omni:

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    model: 'openai/gpt-5-mini',
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      only: ['azure'],
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': '<YOUR_SITE_URL>',
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openai/gpt-5-mini',
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        only: ['azure'],
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'model': 'openai/gpt-5-mini',
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'only': ['azure'],
    },
  })
  ```
</CodeGroup>

## Ignoring Providers

You can ignore providers for a request by setting the `ignore` field in the `provider` object.

| Field    | Type      | Default | Description                                      |
| -------- | --------- | ------- | ------------------------------------------------ |
| `ignore` | string\[] | -       | List of provider slugs to skip for this request. |

<Warning>
  Ignoring multiple providers may significantly reduce fallback options and
  limit request recovery.
</Warning>

<Tip title="Account-Wide Ignored Providers">
  You can ignore providers for all account requests in your [privacy settings](/settings/privacy). This configuration applies to all API requests and chatroom messages.

  Note that when you ignore providers for a specific request, the list of ignored providers is merged with your account-wide ignored providers.
</Tip>

### Example: Ignoring DeepInfra for a request calling Llama 3.3 70b

Here's an example that will ignore DeepInfra for a request calling Llama 3.3 70b:

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    model: 'meta-llama/llama-3.3-70b-instruct',
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      ignore: ['deepinfra'],
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': '<YOUR_SITE_URL>',
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-3.3-70b-instruct',
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        ignore: ['deepinfra'],
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'model': 'meta-llama/llama-3.3-70b-instruct',
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'ignore': ['deepinfra'],
    },
  })
  ```
</CodeGroup>

## Quantization

Quantization reduces model size and computational requirements while aiming to preserve performance. Most LLMs today use FP16 or BF16 for training and inference, cutting memory requirements in half compared to FP32. Some optimizations use FP8 or quantization to reduce size further (e.g., INT8, INT4).

| Field           | Type      | Default | Description                                                                                     |
| --------------- | --------- | ------- | ----------------------------------------------------------------------------------------------- |
| `quantizations` | string\[] | -       | List of quantization levels to filter by (e.g. `["int4", "int8"]`). [Learn more](#quantization) |

<Warning>
  Quantized models may exhibit degraded performance for certain prompts,
  depending on the method used.
</Warning>

Providers can support various quantization levels for open-weight models.

### Quantization Levels

By default, requests are load-balanced across all available providers, ordered by price. To filter providers by quantization level, specify the `quantizations` field in the `provider` parameter with the following values:

* `int4`: Integer (4 bit)
* `int8`: Integer (8 bit)
* `fp4`: Floating point (4 bit)
* `fp6`: Floating point (6 bit)
* `fp8`: Floating point (8 bit)
* `fp16`: Floating point (16 bit)
* `bf16`: Brain floating point (16 bit)
* `fp32`: Floating point (32 bit)
* `unknown`: Unknown

### Example: Requesting FP8 Quantization

Here's an example that will only use providers that support FP8 quantization:

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    model: 'meta-llama/llama-3.1-8b-instruct',
    messages: [{ role: 'user', content: 'Hello' }],
    provider: {
      quantizations: ['fp8'],
    },
    stream: false,
  });
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': '<YOUR_SITE_URL>',
      'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-3.1-8b-instruct',
      messages: [{ role: 'user', content: 'Hello' }],
      provider: {
        quantizations: ['fp8'],
      },
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'model': 'meta-llama/llama-3.1-8b-instruct',
    'messages': [{ 'role': 'user', 'content': 'Hello' }],
    'provider': {
      'quantizations': ['fp8'],
    },
  })
  ```
</CodeGroup>

### Max Price

To filter providers by price, specify the `max_price` field in the `provider` parameter with a JSON object specifying the highest provider pricing you will accept.

For example, the value `{"prompt": 1, "completion": 2}` will route to any provider with a price of `<= $1/m` prompt tokens, and `<= $2/m` completion tokens or less.

Some providers support per request pricing, in which case you can use the `request` attribute of max\_price. Lastly, `image` is also available, which specifies the max price per image you will accept.

Practically, this field is often combined with a provider `sort` to express, for example, "Use the provider with the highest throughput, as long as it doesn't cost more than `$x/m` tokens."

## Provider-Specific Headers

Some providers support beta features that can be enabled through special headers. OpenRouter allows you to pass through certain provider-specific beta headers when making requests.

### Anthropic Beta Features

When using Anthropic models (Claude), you can request specific beta features by including the `x-anthropic-beta` header in your request. OpenRouter will pass through supported beta features to Anthropic.

#### Supported Beta Features

| Feature                     | Header Value                             | Description                                                                                                                                         |
| --------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fine-Grained Tool Streaming | `fine-grained-tool-streaming-2025-05-14` | Enables more granular streaming events during tool calls, providing real-time updates as tool arguments are being generated                         |
| Interleaved Thinking        | `interleaved-thinking-2025-05-14`        | Allows Claude's thinking/reasoning to be interleaved with regular output, rather than appearing as a single block                                   |
| Structured Outputs          | `structured-outputs-2025-11-13`          | Enables the strict tool use feature for supported Claude models, validating tool parameters against your schema to ensure correctly-typed arguments |

<Note>
  OpenRouter manages some Anthropic beta features automatically:

  * **Prompt caching and extended context** are enabled based on model capabilities
  * **Structured outputs for JSON schema response format** (`response_format.type: "json_schema"`) - the header is automatically applied

  For **strict tool use** (`strict: true` on tools), you must explicitly pass the `structured-outputs-2025-11-13` header. Without this header, OpenRouter will strip the `strict` field and route normally.
</Note>

#### Example: Enabling Fine-Grained Tool Streaming

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send(
    {
      model: 'anthropic/claude-sonnet-4.5',
      messages: [{ role: 'user', content: 'What is the weather in Tokyo?' }],
      tools: [
        {
          type: 'function',
          function: {
            name: 'get_weather',
            description: 'Get the current weather for a location',
            parameters: {
              type: 'object',
              properties: {
                location: { type: 'string' },
              },
              required: ['location'],
            },
          },
        },
      ],
      stream: true,
    },
    {
      headers: {
        'x-anthropic-beta': 'fine-grained-tool-streaming-2025-05-14',
      },
    },
  );
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'Content-Type': 'application/json',
      'x-anthropic-beta': 'fine-grained-tool-streaming-2025-05-14',
    },
    body: JSON.stringify({
      model: 'anthropic/claude-sonnet-4.5',
      messages: [{ role: 'user', content: 'What is the weather in Tokyo?' }],
      tools: [
        {
          type: 'function',
          function: {
            name: 'get_weather',
            description: 'Get the current weather for a location',
            parameters: {
              type: 'object',
              properties: {
                location: { type: 'string' },
              },
              required: ['location'],
            },
          },
        },
      ],
      stream: true,
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
    'x-anthropic-beta': 'fine-grained-tool-streaming-2025-05-14',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'model': 'anthropic/claude-sonnet-4.5',
    'messages': [{ 'role': 'user', 'content': 'What is the weather in Tokyo?' }],
    'tools': [
      {
        'type': 'function',
        'function': {
          'name': 'get_weather',
          'description': 'Get the current weather for a location',
          'parameters': {
            'type': 'object',
            'properties': {
              'location': { 'type': 'string' },
            },
            'required': ['location'],
          },
        },
      },
    ],
    'stream': True,
  })
  ```
</CodeGroup>

#### Example: Enabling Interleaved Thinking

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send(
    {
      model: 'anthropic/claude-sonnet-4.5',
      messages: [{ role: 'user', content: 'Solve this step by step: What is 15% of 240?' }],
      stream: true,
    },
    {
      headers: {
        'x-anthropic-beta': 'interleaved-thinking-2025-05-14',
      },
    },
  );
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'Content-Type': 'application/json',
      'x-anthropic-beta': 'interleaved-thinking-2025-05-14',
    },
    body: JSON.stringify({
      model: 'anthropic/claude-sonnet-4.5',
      messages: [{ role: 'user', content: 'Solve this step by step: What is 15% of 240?' }],
      stream: true,
    }),
  });
  ```

  ```python title="Python"
  import requests

  headers = {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
    'x-anthropic-beta': 'interleaved-thinking-2025-05-14',
  }

  response = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json={
    'model': 'anthropic/claude-sonnet-4.5',
    'messages': [{ 'role': 'user', 'content': 'Solve this step by step: What is 15% of 240?' }],
    'stream': True,
  })
  ```
</CodeGroup>

#### Combining Multiple Beta Features

You can enable multiple beta features by separating them with commas:

```bash
x-anthropic-beta: fine-grained-tool-streaming-2025-05-14,interleaved-thinking-2025-05-14
```

<Warning>
  Beta features are experimental and may change or be deprecated by Anthropic. Check [Anthropic's documentation](https://docs.anthropic.com/en/api/beta-features) for the latest information on available beta features.
</Warning>

## Terms of Service

You can view the terms of service for each provider below. You may not violate the terms of service or policies of third-party providers that power the models on OpenRouter.

<TermsOfServiceDescriptions />
***

title: Free Variant
subtitle: 'Access free models with the :free variant'
headline: Free Variant | Free Model Access
canonical-url: '[https://openrouter.ai/docs/guides/routing/model-variants/free](https://openrouter.ai/docs/guides/routing/model-variants/free)'
'og:site\_name': OpenRouter Documentation
'og:title': Free Variant - Free Model Access
'og:description': 'Access free models using the :free variant suffix.'
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Free%20Variant\&description=Free%20model%20access](https://openrouter.ai/dynamic-og?title=Free%20Variant\&description=Free%20model%20access)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

The `:free` variant allows you to access free versions of models on OpenRouter.

## Usage

Append `:free` to any model ID:

```json
{
  "model": "meta-llama/llama-3.2-3b-instruct:free"
}
```

## Details

Free variants provide access to models without cost, but may have different rate limits or availability compared to paid versions.

## Related Resources

* [Free Models Router](/docs/guides/guides/free-models-router-playground) - Learn how to use the Free Models Router in the Chat Playground for zero-cost inference
***

title: Extended Variant
subtitle: 'Extended context windows with :extended'
headline: Extended Variant | Extended Context Windows
canonical-url: '[https://openrouter.ai/docs/guides/routing/model-variants/extended](https://openrouter.ai/docs/guides/routing/model-variants/extended)'
'og:site\_name': OpenRouter Documentation
'og:title': Extended Variant - Extended Context Windows
'og:description': 'Access extended context window versions of models using the :extended variant.'
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Extended%20Variant\&description=Extended%20context%20windows](https://openrouter.ai/dynamic-og?title=Extended%20Variant\&description=Extended%20context%20windows)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

The `:extended` variant provides access to model versions with extended context windows.

## Usage

Append `:extended` to any model ID:

```json
{
  "model": "anthropic/claude-sonnet-4.5:extended"
}
```

## Details

Extended variants offer larger context windows than the standard model versions, allowing you to process longer inputs and maintain more conversation history.
***

title: Exacto Variant
subtitle: Route requests through OpenRouter-curated providers
headline: Exacto Variant | Curated provider routing for consistent quality
canonical-url: '[https://openrouter.ai/docs/guides/routing/model-variants/exacto](https://openrouter.ai/docs/guides/routing/model-variants/exacto)'
'og:site\_name': OpenRouter Documentation
'og:title': Exacto Variant - Curated provider routing for consistent quality
'og:description': >-
Learn how to target OpenRouter-selected providers by using the :exacto model
variant.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Exacto%20Variant\&description=Curated%20provider%20routing](https://openrouter.ai/dynamic-og?title=Exacto%20Variant\&description=Curated%20provider%20routing)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

Introducing a new set of endpoints, `:exacto`, focused on higher tool‑calling accuracy by routing to a sub‑group of providers with measurably better tool‑use success rates. It uses the same request payloads as any other variant, but filters endpoints so that only vetted providers for the chosen model are considered. To learn more, read our [blog post](https://openrouter.ai/announcements/provider-variance-introducing-exacto).

## Using the Exacto Variant

Add `:exacto` to the end of any supported model slug. The curated allowlist is enforced before provider sorting, fallback, or load balancing — no extra provider preference config is required.

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
  });

  const completion = await openRouter.chat.send({
    model: "moonshotai/kimi-k2-0905:exacto",
    messages: [
      {
        role: "user",
        content: "Draft a concise changelog entry for the Exacto launch.",
      },
    ],
    stream: false,
  });

  console.log(completion.choices[0].message.content);
  ```

  ```typescript title="TypeScript (OpenAI SDK)"
  import OpenAI from "openai";

  const client = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
  });

  const completion = await client.chat.completions.create({
    model: "moonshotai/kimi-k2-0905:exacto",
    messages: [
      {
        role: "user",
        content: "Draft a concise changelog entry for the Exacto launch.",
      },
    ],
  });
  ```

  ```shell title="cURL"
  curl https://openrouter.ai/api/v1/chat/completions \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENROUTER_API_KEY" \
    -d '{
    "model": "moonshotai/kimi-k2-0905:exacto",
    "messages": [
      {
        "role": "user",
        "content": "Summarize the latest release notes for me."
      }
    ]
  }'
  ```
</CodeGroup>

<Tip>
  You can still supply fallback models with the `models` array. Any model that
  carries the `:exacto` suffix will enforce the curated provider list when it is
  selected.
</Tip>

## What Is the Exacto Variant?

Exacto is a curated routing variant specifically focused on tool‑calling accuracy. Unlike standard routing, which considers all available providers for a model, Exacto restricts routing to providers that demonstrate higher tool‑use accuracy and normal tool‑use propensity on real workloads.

## Why Use Exacto?

### Why We Built It

Providers running the same model can differ in accuracy due to implementation details in production inference. OpenRouter sees billions of requests monthly, giving us a unique vantage point to observe these differences and minimize surprises for users. Exacto combines benchmark results with real‑world tool‑calling telemetry to select the best‑performing providers.

### Recommended Use Cases

Exacto is optimized for quality‑sensitive, agentic workflows where tool‑calling accuracy and reliability are critical.

## Supported Models

Exacto endpoints are available for:

* Kimi K2 (`moonshotai/kimi-k2-0905:exacto`)
* DeepSeek v3.1 Terminus (`deepseek/deepseek-v3.1-terminus:exacto`)
* GLM 4.6 (`z-ai/glm-4.6:exacto`)
* GPT‑OSS 120B (`openai/gpt-oss-120b:exacto`)
* Qwen3 Coder (`qwen/qwen3-coder:exacto`)

## How We Select Providers

We use three inputs:

* Tool‑calling accuracy from real traffic across billions of calls
* Real‑time provider preferences (pins/ignores) from users making tool calls
* Benchmarking (internal eval suites, Groq OpenBench running LiveMCPBench, official tau2bench, and similar)

You will be routed only to providers that:

1. Are top‑tier on tool‑calling accuracy
2. Fall within a normal range of tool‑calling propensity
3. Are not frequently ignored or blacklisted by users when tools are provided

In our evaluations and open‑source benchmarks (e.g., tau2‑Bench, LiveMCPBench), Exacto shows materially fewer tool‑calling failures and more reliable tool use.

We will continue working with providers not currently in the Exacto pool to help them improve and be included. Exacto targets tool‑calling specifically and is not a broad statement on overall provider quality.

<Note>
  If you have feedback on the Exacto variant, please fill out this form:
  [https://openrouter.notion.site/2932fd57c4dc8097ba74ffb6d27f39d1?pvs=105](https://openrouter.notion.site/2932fd57c4dc8097ba74ffb6d27f39d1?pvs=105)
</Note>
***

title: Thinking Variant
subtitle: 'Enable extended reasoning with :thinking'
headline: Thinking Variant | Extended Reasoning
canonical-url: '[https://openrouter.ai/docs/guides/routing/model-variants/thinking](https://openrouter.ai/docs/guides/routing/model-variants/thinking)'
'og:site\_name': OpenRouter Documentation
'og:title': Thinking Variant - Extended Reasoning
'og:description': 'Enable extended reasoning capabilities using the :thinking variant.'
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Thinking%20Variant\&description=Extended%20reasoning](https://openrouter.ai/dynamic-og?title=Thinking%20Variant\&description=Extended%20reasoning)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

The `:thinking` variant enables extended reasoning capabilities for complex problem-solving tasks.

## Usage

Append `:thinking` to any model ID:

```json
{
  "model": "deepseek/deepseek-r1:thinking"
}
```

## Details

Thinking variants provide access to models with extended reasoning capabilities, allowing for more thorough analysis and step-by-step problem solving. This is particularly useful for complex tasks that benefit from chain-of-thought reasoning.

See also: [Reasoning Tokens](/docs/best-practices/reasoning-tokens)
***

title: Online Variant
subtitle: 'Real-time web search with :online'
headline: Online Variant | Real-Time Web Search
canonical-url: '[https://openrouter.ai/docs/guides/routing/model-variants/online](https://openrouter.ai/docs/guides/routing/model-variants/online)'
'og:site\_name': OpenRouter Documentation
'og:title': Online Variant - Real-Time Web Search
'og:description': 'Enable real-time web search capabilities using the :online variant.'
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Online%20Variant\&description=Real-time%20web%20search](https://openrouter.ai/dynamic-og?title=Online%20Variant\&description=Real-time%20web%20search)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

The `:online` variant enables real-time web search capabilities for any model on OpenRouter.

## Usage

Append `:online` to any model ID:

```json
{
  "model": "openai/gpt-5.2:online"
}
```

This is a shortcut for using the `web` plugin, and is exactly equivalent to:

```json
{
  "model": "openrouter/auto",
  "plugins": {
    "web": {}
  }
}
```

## Details

The Online variant incorporates relevant web search results into model responses, providing access to real-time information and current events. This is particularly useful for queries that require up-to-date information beyond the model's training data.

For more details, see: [Web Search](/docs/guides/features/plugins/web-search)
***

title: Nitro Variant
subtitle: 'High-speed model inference with :nitro'
headline: Nitro Variant | High-Speed Inference
canonical-url: '[https://openrouter.ai/docs/guides/routing/model-variants/nitro](https://openrouter.ai/docs/guides/routing/model-variants/nitro)'
'og:site\_name': OpenRouter Documentation
'og:title': Nitro Variant - High-Speed Inference
'og:description': 'Access high-speed model inference using the :nitro variant.'
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Nitro%20Variant\&description=High-speed%20inference](https://openrouter.ai/dynamic-og?title=Nitro%20Variant\&description=High-speed%20inference)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

The `:nitro` variant is an alias for sorting providers by throughput. When you use `:nitro`, OpenRouter will prioritize providers with the highest throughput (tokens per second).

## Usage

Append `:nitro` to any model ID:

```json
{
  "model": "openai/gpt-5.2:nitro"
}
```

This is exactly equivalent to setting `provider.sort` to `"throughput"` in your request. For more details on provider sorting, see the [Provider Routing documentation](/docs/features/provider-routing#provider-sorting).
***

title: Auto Router
subtitle: Automatically select the best model for your prompt
headline: Auto Router | Smart AI Model Selection
canonical-url: '[https://openrouter.ai/docs/guides/routing/routers/auto-router](https://openrouter.ai/docs/guides/routing/routers/auto-router)'
'og:site\_name': OpenRouter Documentation
'og:title': Auto Router - Intelligent Model Selection
'og:description': >-
Automatically select the best AI model for your prompts using OpenRouter's
Auto Router powered by NotDiamond.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Auto%20Router\&description=Intelligent%20AI%20model%20selection](https://openrouter.ai/dynamic-og?title=Auto%20Router\&description=Intelligent%20AI%20model%20selection)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
-----------------------------

The [Auto Router](https://openrouter.ai/openrouter/auto) (`openrouter/auto`) automatically selects the best model for your prompt, powered by [NotDiamond](https://www.notdiamond.ai/).

## Overview

Instead of manually choosing a model, let the Auto Router analyze your prompt and select the optimal model from a curated set of high-quality options. The router considers factors like prompt complexity, task type, and model capabilities.

## Usage

Set your model to `openrouter/auto`:

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    model: 'openrouter/auto',
    messages: [
      {
        role: 'user',
        content: 'Explain quantum entanglement in simple terms',
      },
    ],
  });

  console.log(completion.choices[0].message.content);
  // Check which model was selected
  console.log('Model used:', completion.model);
  ```

  ```typescript title="TypeScript (fetch)"
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openrouter/auto',
      messages: [
        {
          role: 'user',
          content: 'Explain quantum entanglement in simple terms',
        },
      ],
    }),
  });

  const data = await response.json();
  console.log(data.choices[0].message.content);
  // Check which model was selected
  console.log('Model used:', data.model);
  ```

  ```python title="Python"
  import requests
  import json

  response = requests.post(
    url="https://openrouter.ai/api/v1/chat/completions",
    headers={
      "Authorization": "Bearer <OPENROUTER_API_KEY>",
      "Content-Type": "application/json",
    },
    data=json.dumps({
      "model": "openrouter/auto",
      "messages": [
        {
          "role": "user",
          "content": "Explain quantum entanglement in simple terms"
        }
      ]
    })
  )

  data = response.json()
  print(data['choices'][0]['message']['content'])
  # Check which model was selected
  print('Model used:', data['model'])
  ```
</CodeGroup>

## Response

The response includes the `model` field showing which model was actually used:

```json
{
  "id": "gen-...",
  "model": "anthropic/claude-sonnet-4.5",  // The model that was selected
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "..."
      }
    }
  ],
  "usage": {
    "prompt_tokens": 15,
    "completion_tokens": 150,
    "total_tokens": 165
  }
}
```

## How It Works

1. **Prompt Analysis**: Your prompt is analyzed by NotDiamond's routing system
2. **Model Selection**: The optimal model is selected based on the task requirements
3. **Request Forwarding**: Your request is forwarded to the selected model
4. **Response Tracking**: The response includes metadata showing which model was used

## Supported Models

The Auto Router selects from a curated set of high-quality models including:

<Callout intent="warning">
  Model slugs change as new versions are released. The examples below are current as of December 4, 2025. Check the [models page](https://openrouter.ai/models) for the latest available models.
</Callout>

* Claude Sonnet 4.5 (`anthropic/claude-sonnet-4.5`)
* Claude Opus 4.5 (`anthropic/claude-opus-4.5`)
* GPT-5.1 (`openai/gpt-5.1`)
* Gemini 3 Pro (`google/gemini-3-pro-preview`)
* DeepSeek 3.2 (`deepseek/deepseek-v3.2`)
* And other top-performing models

The exact model pool may be updated as new models become available.

## Configuring Allowed Models

You can restrict which models the Auto Router can select from using the `plugins` parameter. This is useful when you want to limit routing to specific providers or model families.

### Via API Request

Use wildcard patterns to filter models. For example, `anthropic/*` matches all Anthropic models:

<CodeGroup>
  ```typescript title="TypeScript SDK"
  const completion = await openRouter.chat.send({
    model: 'openrouter/auto',
    messages: [
      {
        role: 'user',
        content: 'Explain quantum entanglement',
      },
    ],
    plugins: [
      {
        id: 'auto-router',
        allowed_models: ['anthropic/*', 'openai/gpt-5.1'],
      },
    ],
  });
  ```

  ```typescript title="TypeScript (fetch)"
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer <OPENROUTER_API_KEY>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openrouter/auto',
      messages: [
        {
          role: 'user',
          content: 'Explain quantum entanglement',
        },
      ],
      plugins: [
        {
          id: 'auto-router',
          allowed_models: ['anthropic/*', 'openai/gpt-5.1'],
        },
      ],
    }),
  });
  ```

  ```python title="Python"
  response = requests.post(
    url="https://openrouter.ai/api/v1/chat/completions",
    headers={
      "Authorization": "Bearer <OPENROUTER_API_KEY>",
      "Content-Type": "application/json",
    },
    data=json.dumps({
      "model": "openrouter/auto",
      "messages": [
        {
          "role": "user",
          "content": "Explain quantum entanglement"
        }
      ],
      "plugins": [
        {
          "id": "auto-router",
          "allowed_models": ["anthropic/*", "openai/gpt-5.1"]
        }
      ]
    })
  )
  ```
</CodeGroup>

### Via Settings UI

You can also configure default allowed models in your [Plugin Settings](https://openrouter.ai/settings/plugins):

1. Navigate to **Settings > Plugins**
2. Find **Auto Router** and click the configure button
3. Enter model patterns (one per line)
4. Save your settings

These defaults apply to all your API requests unless overridden per-request.

### Pattern Syntax

| Pattern          | Matches                                |
| ---------------- | -------------------------------------- |
| `anthropic/*`    | All Anthropic models                   |
| `openai/gpt-5*`  | All GPT-5 variants                     |
| `google/*`       | All Google models                      |
| `openai/gpt-5.1` | Exact match only                       |
| `*/claude-*`     | Any provider with claude in model name |

When no patterns are configured, the Auto Router uses all supported models.

## Pricing

You pay the standard rate for whichever model is selected. There is no additional fee for using the Auto Router.

## Use Cases

* **General-purpose applications**: When you don't know what types of prompts users will send
* **Cost optimization**: Let the router choose efficient models for simpler tasks
* **Quality optimization**: Ensure complex prompts get routed to capable models
* **Experimentation**: Discover which models work best for your use case

## Limitations

* The router requires `messages` format (not `prompt`)
* Streaming is supported
* All standard OpenRouter features (tool calling, etc.) work with the selected model

## Related

* [Body Builder](/docs/guides/routing/routers/body-builder) - Generate multiple parallel API requests
* [Model Fallbacks](/docs/guides/routing/model-fallbacks) - Configure fallback models
* [Provider Selection](/docs/guides/routing/provider-selection) - Control which providers are used
***

title: Body Builder
subtitle: Generate multiple parallel API requests from natural language
headline: Body Builder | Multi-Model Request Generation
canonical-url: '[https://openrouter.ai/docs/guides/routing/routers/body-builder](https://openrouter.ai/docs/guides/routing/routers/body-builder)'
'og:site\_name': OpenRouter Documentation
'og:title': Body Builder - Generate Parallel API Requests
'og:description': >-
Use natural language to generate multiple OpenRouter API requests for parallel
model execution.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Body%20Builder\&description=Multi-model%20request%20generation](https://openrouter.ai/dynamic-og?title=Body%20Builder\&description=Multi-model%20request%20generation)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
-----------------------------

The [Body Builder](https://openrouter.ai/openrouter/bodybuilder) (`openrouter/bodybuilder`) transforms natural language prompts into structured OpenRouter API requests, enabling you to easily run the same task across multiple models in parallel.

## Overview

Body Builder uses AI to understand your intent and generate valid OpenRouter API request bodies. Simply describe what you want to accomplish and which models you want to use, and Body Builder returns ready-to-execute JSON requests.

<Callout intent="info">
  Body Builder is **free to use**. There is no charge for generating the request bodies.
</Callout>

## Usage

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    model: 'openrouter/bodybuilder',
    messages: [
      {
        role: 'user',
        content: 'Count to 10 using Claude Sonnet and GPT-5',
      },
    ],
  });

  // Parse the generated requests
  const generatedRequests = JSON.parse(completion.choices[0].message.content);
  console.log(generatedRequests);
  ```

  ```typescript title="TypeScript (fetch)"
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openrouter/bodybuilder',
      messages: [
        {
          role: 'user',
          content: 'Count to 10 using Claude Sonnet and GPT-5',
        },
      ],
    }),
  });

  const data = await response.json();
  const generatedRequests = JSON.parse(data.choices[0].message.content);
  console.log(generatedRequests);
  ```

  ```python title="Python"
  import requests
  import json

  response = requests.post(
    url="https://openrouter.ai/api/v1/chat/completions",
    headers={
      "Authorization": "Bearer <OPENROUTER_API_KEY>",
      "Content-Type": "application/json",
    },
    data=json.dumps({
      "model": "openrouter/bodybuilder",
      "messages": [
        {
          "role": "user",
          "content": "Count to 10 using Claude Sonnet and GPT-5"
        }
      ]
    })
  )

  data = response.json()
  generated_requests = json.loads(data['choices'][0]['message']['content'])
  print(json.dumps(generated_requests, indent=2))
  ```
</CodeGroup>

## Response Format

Body Builder returns a JSON object containing an array of OpenRouter-compatible request bodies:

```json
{
  "requests": [
    {
      "model": "anthropic/claude-sonnet-4.5",
      "messages": [
        {"role": "user", "content": "Count to 10"}
      ]
    },
    {
      "model": "openai/gpt-5.1",
      "messages": [
        {"role": "user", "content": "Count to 10"}
      ]
    }
  ]
}
```

## Executing Generated Requests

After generating the request bodies, execute them in parallel:

<CodeGroup>
  ```typescript title="TypeScript"
  // Generate the requests
  const builderResponse = await openRouter.chat.send({
    model: 'openrouter/bodybuilder',
    messages: [{ role: 'user', content: 'Explain gravity using Gemini and Claude' }],
  });

  const { requests } = JSON.parse(builderResponse.choices[0].message.content);

  // Execute all requests in parallel
  const results = await Promise.all(
    requests.map((req) => openRouter.chat.send(req))
  );

  // Process results
  results.forEach((result, i) => {
    console.log(`Model: ${requests[i].model}`);
    console.log(`Response: ${result.choices[0].message.content}\n`);
  });
  ```

  ```python title="Python"
  import asyncio
  import aiohttp
  import json

  async def execute_request(session, request):
      async with session.post(
          "https://openrouter.ai/api/v1/chat/completions",
          headers={
              "Authorization": "Bearer <OPENROUTER_API_KEY>",
              "Content-Type": "application/json"
          },
          data=json.dumps(request)
      ) as response:
          return await response.json()

  async def main():
      # First, generate the requests
      async with aiohttp.ClientSession() as session:
          builder_response = await execute_request(session, {
              "model": "openrouter/bodybuilder",
              "messages": [{"role": "user", "content": "Explain gravity using Gemini and Claude"}]
          })

          generated = json.loads(builder_response['choices'][0]['message']['content'])

          # Execute all requests in parallel
          tasks = [execute_request(session, req) for req in generated['requests']]
          results = await asyncio.gather(*tasks)

          for req, result in zip(generated['requests'], results):
              print(f"Model: {req['model']}")
              print(f"Response: {result['choices'][0]['message']['content']}\n")

  asyncio.run(main())
  ```
</CodeGroup>

## Use Cases

### Model Benchmarking

Compare how different models handle the same task:

```
"Write a haiku about programming using Claude Sonnet, GPT-5, and Gemini"
```

### Redundancy and Reliability

Get responses from multiple providers for critical applications:

```
"Answer 'What is 2+2?' using three different models for verification"
```

### A/B Testing

Test prompts across models to find the best fit:

```
"Summarize this article using the top 5 coding models: [article text]"
```

### Exploration

Discover which models excel at specific tasks:

```
"Generate a creative story opening using various creative writing models"
```

## Model Selection

Body Builder has access to all available OpenRouter models and will:

* Use the latest model versions by default
* Select appropriate models based on your description
* Understand model aliases and common names

<Callout intent="warning">
  Model slugs change as new versions are released. The examples below are current as of December 4, 2025. Check the [models page](https://openrouter.ai/models) for the latest available models.
</Callout>

Example model references that work:

* "Claude Sonnet" → `anthropic/claude-sonnet-4.5`
* "Claude Opus" → `anthropic/claude-opus-4.5`
* "GPT-5" → `openai/gpt-5.1`
* "Gemini" → `google/gemini-3-pro-preview`
* "DeepSeek" → `deepseek/deepseek-v3.2`

## Pricing

* **Body Builder requests**: Free (no charge for generating request bodies)
* **Executing generated requests**: Standard model pricing applies

## Limitations

* Requires `messages` format input
* Generated requests use minimal required fields by default
* System messages in your input are preserved and forwarded

## Related

* [Auto Router](/docs/guides/routing/routers/auto-router) - Automatic single-model selection
* [Model Fallbacks](/docs/guides/routing/model-fallbacks) - Configure fallback models
* [Structured Outputs](/docs/guides/features/structured-outputs) - Get structured JSON responses
***

title: Free Models Router
subtitle: Get free AI inference by routing to available free models
headline: Free Models Router | Zero-Cost AI Inference
canonical-url: '[https://openrouter.ai/docs/guides/routing/routers/free-router](https://openrouter.ai/docs/guides/routing/routers/free-router)'
'og:site\_name': OpenRouter Documentation
'og:title': Free Models Router - Zero-Cost AI Inference
'og:description': >-
Route requests to free AI models automatically using OpenRouter's Free Models
Router.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Free%20Models%20Router\&description=Zero-cost%20AI%20inference](https://openrouter.ai/dynamic-og?title=Free%20Models%20Router\&description=Zero-cost%20AI%20inference)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
-----------------------------

The [Free Models Router](https://openrouter.ai/openrouter/free) (`openrouter/free`) automatically selects a free model at random from the available free models on OpenRouter. The router intelligently filters for models that support the features your request needs, such as image understanding, tool calling, and structured outputs.

## Overview

Instead of manually choosing a specific free model, let the Free Models Router handle model selection for you. This is ideal for experimentation, learning, and low-volume use cases where you want zero-cost inference without worrying about which specific model to use.

To try the Free Models Router without writing any code, see the [Chat Playground guide](/docs/guides/guides/free-models-router-playground).

## Usage

Set your model to `openrouter/free`:

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const completion = await openRouter.chat.send({
    model: 'openrouter/free',
    messages: [
      {
        role: 'user',
        content: 'Hello! What can you help me with today?',
      },
    ],
  });

  console.log(completion.choices[0].message.content);
  // Check which model was selected
  console.log('Model used:', completion.model);
  ```

  ```typescript title="TypeScript (fetch)"
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <OPENROUTER_API_KEY>',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openrouter/free',
      messages: [
        {
          role: 'user',
          content: 'Hello! What can you help me with today?',
        },
      ],
    }),
  });

  const data = await response.json();
  console.log(data.choices[0].message.content);
  // Check which model was selected
  console.log('Model used:', data.model);
  ```

  ```python title="Python"
  import requests
  import json

  response = requests.post(
    url="https://openrouter.ai/api/v1/chat/completions",
    headers={
      "Authorization": "Bearer <OPENROUTER_API_KEY>",
      "Content-Type": "application/json",
    },
    data=json.dumps({
      "model": "openrouter/free",
      "messages": [
        {
          "role": "user",
          "content": "Hello! What can you help me with today?"
        }
      ]
    })
  )

  data = response.json()
  print(data['choices'][0]['message']['content'])
  # Check which model was selected
  print('Model used:', data['model'])
  ```

  ```bash title="cURL"
  curl https://openrouter.ai/api/v1/chat/completions \
    -H "Authorization: Bearer $OPENROUTER_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "openrouter/free",
      "messages": [{"role": "user", "content": "Hello!"}]
    }'
  ```
</CodeGroup>

## Response

The response includes the `model` field showing which free model was actually used:

```json
{
  "id": "gen-...",
  "model": "upstage/solar-pro-3:free",
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "..."
      }
    }
  ],
  "usage": {
    "prompt_tokens": 12,
    "completion_tokens": 85,
    "total_tokens": 97
  }
}
```

## How It Works

1. **Request Analysis**: Your request is analyzed to determine required capabilities (e.g., vision, tool calling, structured outputs)
2. **Model Filtering**: The router filters available free models to those supporting your request's requirements
3. **Random Selection**: A model is randomly selected from the filtered pool
4. **Request Forwarding**: Your request is forwarded to the selected free model
5. **Response Tracking**: The response includes metadata showing which model was used

## Available Free Models

The Free Models Router selects from all currently available free models on OpenRouter. Some popular options include:

<Callout intent="warning">
  Free model availability changes frequently. Check the [models page](https://openrouter.ai/models?pricing=free) for the current list of free models.
</Callout>

* **DeepSeek R1 (free)** - DeepSeek's reasoning model
* **Llama models (free)** - Various Meta Llama models
* **Qwen models (free)** - Alibaba's Qwen family
* And other community-contributed free models

## Pricing

The Free Models Router is completely free. There is no charge for:

* Using the router itself
* Requests routed to free models

## Use Cases

* **Learning and experimentation**: Try AI capabilities without any cost
* **Prototyping**: Build and test applications before committing to paid models
* **Low-volume applications**: Suitable for personal projects or demos
* **Education**: Perfect for students and educators exploring AI

## Limitations

* **Rate limits**: Free models may have lower rate limits than paid models
* **Availability**: Free model availability can vary; some may be temporarily unavailable
* **Performance**: Free models may have higher latency during peak usage
* **Model selection**: You cannot control which specific model is selected (use the `:free` variant suffix on a specific model if you need a particular free model)

## Selecting Specific Free Models

If you prefer to use a specific free model rather than random selection, you can:

1. **Use the `:free` variant**: Append `:free` to any model that has a free variant:
   ```json
   {
     "model": "meta-llama/llama-3.2-3b-instruct:free"
   }
   ```

2. **Browse free models**: Visit the [models page](https://openrouter.ai/models?pricing=free) to see all available free models and select one directly.

## Related

* [Free Models Router in Chat Playground](/docs/guides/guides/free-models-router-playground) - Try the router without writing code
* [Free Variant](/docs/guides/routing/model-variants/free) - Use the `:free` suffix for specific models
* [Auto Router](/docs/guides/routing/routers/auto-router) - Intelligent model selection (paid models)
* [Body Builder](/docs/guides/routing/routers/body-builder) - Generate multiple parallel API requests
* [Model Fallbacks](/docs/guides/routing/model-fallbacks) - Configure fallback models
***

title: Presets
subtitle: Manage your LLM configurations
headline: Presets | Configuration Management for AI Models
canonical-url: '[https://openrouter.ai/docs/guides/features/presets](https://openrouter.ai/docs/guides/features/presets)'
'og:site\_name': OpenRouter Documentation
'og:title': Presets - Configuration Management for AI Models
'og:description': >-
Learn how to use OpenRouter's presets to manage model configurations, system
prompts, and parameters across your applications.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Presets\&description=Configuration%20management%20for%20AI%20models](https://openrouter.ai/dynamic-og?title=Presets\&description=Configuration%20management%20for%20AI%20models)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

[Presets](/settings/presets) allow you to separate your LLM configuration from your code. Create and manage presets through the OpenRouter web application to control provider routing, model selection, system prompts, and other parameters, then reference them in OpenRouter API requests.

## What are Presets?

Presets are named configurations that encapsulate all the settings needed for a specific use case. For example, you might create:

* An "email-copywriter" preset for generating marketing copy
* An "inbound-classifier" preset for categorizing customer inquiries
* A "code-reviewer" preset for analyzing pull requests

Each preset can manage:

* Provider routing preferences (sort by price, latency, etc.)
* Model selection (specific model or array of models with fallbacks)
* System prompts
* Generation parameters (temperature, top\_p, etc.)
* Provider inclusion/exclusion rules

## Quick Start

1. [Create a preset](/settings/presets). For example, select a model and restrict provider routing to just a few providers.
   ![Creating a new preset](file:8c5d792b-a27f-4ec6-a5d3-569f34489c90 "A new preset")

2. Make an API request to the preset:

```json
{
  "model": "@preset/ravenel-bridge",
  "messages": [
    {
      "role": "user",
      "content": "What's your opinion of the Golden Gate Bridge? Isn't it beautiful?"
    }
  ]
}
```

## Benefits

### Separation of Concerns

Presets help you maintain a clean separation between your application code and LLM configuration. This makes your code more semantic and easier to maintain.

### Rapid Iteration

Update your LLM configuration without deploying code changes:

* Switch to new model versions
* Adjust system prompts
* Modify parameters
* Change provider preferences

## Using Presets

There are three ways to use presets in your API requests.

1. **Direct Model Reference**

You can reference the preset as if it was a model by sending requests to `@preset/preset-slug`

```json
{
  "model": "@preset/email-copywriter",
  "messages": [
    {
      "role": "user",
      "content": "Write a marketing email about our new feature"
    }
  ]
}
```

2. **Preset Field**

```json
{
  "model": "openai/gpt-4",
  "preset": "email-copywriter",
  "messages": [
    {
      "role": "user",
      "content": "Write a marketing email about our new feature"
    }
  ]
}
```

3. **Combined Model and Preset**

```json
{
  "model": "openai/gpt-4@preset/email-copywriter",
  "messages": [
    {
      "role": "user",
      "content": "Write a marketing email about our new feature"
    }
  ]
}
```

## Other Notes

1. If you're using an organization account, all members can access organization presets. This is a great way to share best practices across teams.
2. Version history is kept in order to understand changes that were made, and to be able to roll back. However when addressing a preset through the API, the latest version is always used.
3. If you provide parameters in the request, they will be shallow-merged with the options configured in the preset.
***

title: Tool & Function Calling
subtitle: Use tools in your prompts
headline: Tool & Function Calling | Use Tools with OpenRouter
canonical-url: '[https://openrouter.ai/docs/guides/features/tool-calling](https://openrouter.ai/docs/guides/features/tool-calling)'
'og:site\_name': OpenRouter Documentation
'og:title': Tool & Function Calling - Use Tools with OpenRouter
'og:description': >-
Use tools (or functions) in your prompts with OpenRouter. Learn how to use
tools with OpenAI, Anthropic, and other models that support tool calling.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Tool%20&%20Function%20Calling\&description=Use%20tools%20with%20OpenRouter](https://openrouter.ai/dynamic-og?title=Tool%20&%20Function%20Calling\&description=Use%20tools%20with%20OpenRouter)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

Tool calls (also known as function calls) give an LLM access to external tools. The LLM does not call the tools directly. Instead, it suggests the tool to call. The user then calls the tool separately and provides the results back to the LLM. Finally, the LLM formats the response into an answer to the user's original question.

OpenRouter standardizes the tool calling interface across models and providers, making it easy to integrate external tools with any supported model.

**Supported Models**: You can find models that support tool calling by filtering on [openrouter.ai/models?supported\_parameters=tools](https://openrouter.ai/models?supported_parameters=tools).

If you prefer to learn from a full end-to-end example, keep reading.

## Request Body Examples

Tool calling with OpenRouter involves three key steps. Here are the essential request body formats for each step:

### Step 1: Inference Request with Tools

```json
{
  "model": "google/gemini-3-flash-preview",
  "messages": [
    {
      "role": "user",
      "content": "What are the titles of some James Joyce books?"
    }
  ],
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "search_gutenberg_books",
        "description": "Search for books in the Project Gutenberg library",
        "parameters": {
          "type": "object",
          "properties": {
            "search_terms": {
              "type": "array",
              "items": {"type": "string"},
              "description": "List of search terms to find books"
            }
          },
          "required": ["search_terms"]
        }
      }
    }
  ]
}
```

### Step 2: Tool Execution (Client-Side)

After receiving the model's response with `tool_calls`, execute the requested tool locally and prepare the result:

```javascript
// Model responds with tool_calls, you execute the tool locally
const toolResult = await searchGutenbergBooks(["James", "Joyce"]);
```

### Step 3: Inference Request with Tool Results

```json
{
  "model": "google/gemini-3-flash-preview",
  "messages": [
    {
      "role": "user",
      "content": "What are the titles of some James Joyce books?"
    },
    {
      "role": "assistant",
      "content": null,
      "tool_calls": [
        {
          "id": "call_abc123",
          "type": "function",
          "function": {
            "name": "search_gutenberg_books",
            "arguments": "{\"search_terms\": [\"James\", \"Joyce\"]}"
          }
        }
      ]
    },
    {
      "role": "tool",
      "tool_call_id": "call_abc123",
      "content": "[{\"id\": 4300, \"title\": \"Ulysses\", \"authors\": [{\"name\": \"Joyce, James\"}]}]"
    }
  ],
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "search_gutenberg_books",
        "description": "Search for books in the Project Gutenberg library",
        "parameters": {
          "type": "object",
          "properties": {
            "search_terms": {
              "type": "array",
              "items": {"type": "string"},
              "description": "List of search terms to find books"
            }
          },
          "required": ["search_terms"]
        }
      }
    }
  ]
}
```

**Note**: The `tools` parameter must be included in every request (Steps 1 and 3) so the router can validate the tool schema on each call.

### Tool Calling Example

Here is Python code that gives LLMs the ability to call an external API -- in this case Project Gutenberg, to search for books.

First, let's do some basic setup:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemini-3-flash-preview'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    import { OpenRouter } from '@openrouter/sdk';

    const OPENROUTER_API_KEY = "{{API_KEY_REF}}";

    // You can use any model that supports tool calling
    const MODEL = "{{MODEL}}";

    const openRouter = new OpenRouter({
      apiKey: OPENROUTER_API_KEY,
    });

    const task = "What are the titles of some James Joyce books?";

    const messages = [
      {
        role: "system",
        content: "You are a helpful assistant."
      },
      {
        role: "user",
        content: task,
      }
    ];
    ```

    ```python
    import json, requests
    from openai import OpenAI

    OPENROUTER_API_KEY = f"{{API_KEY_REF}}"

    # You can use any model that supports tool calling
    MODEL = "{{MODEL}}"

    openai_client = OpenAI(
      base_url="https://openrouter.ai/api/v1",
      api_key=OPENROUTER_API_KEY,
    )

    task = "What are the titles of some James Joyce books?"

    messages = [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": task,
      }
    ]

    ```

    ```typescript title="TypeScript (fetch)"
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer {{API_KEY_REF}}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          {
            role: 'user',
            content: 'What are the titles of some James Joyce books?',
          },
        ],
      }),
    });
    ```
  </CodeGroup>
</Template>

### Define the Tool

Next, we define the tool that we want to call. Remember, the tool is going to get *requested* by the LLM, but the code we are writing here is ultimately responsible for executing the call and returning the results to the LLM.

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemini-3-flash-preview'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    async function searchGutenbergBooks(searchTerms: string[]): Promise<Book[]> {
      const searchQuery = searchTerms.join(' ');
      const url = 'https://gutendex.com/books';
      const response = await fetch(`${url}?search=${searchQuery}`);
      const data = await response.json();

      return data.results.map((book: any) => ({
        id: book.id,
        title: book.title,
        authors: book.authors,
      }));
    }

    const tools = [
      {
        type: 'function',
        function: {
          name: 'searchGutenbergBooks',
          description:
            'Search for books in the Project Gutenberg library based on specified search terms',
          parameters: {
            type: 'object',
            properties: {
              search_terms: {
                type: 'array',
                items: {
                  type: 'string',
                },
                description:
                  "List of search terms to find books in the Gutenberg library (e.g. ['dickens', 'great'] to search for books by Dickens with 'great' in the title)",
              },
            },
            required: ['search_terms'],
          },
        },
      },
    ];

    const TOOL_MAPPING = {
      searchGutenbergBooks,
    };
    ```

    ```python
    def search_gutenberg_books(search_terms):
        search_query = " ".join(search_terms)
        url = "https://gutendex.com/books"
        response = requests.get(url, params={"search": search_query})

        simplified_results = []
        for book in response.json().get("results", []):
            simplified_results.append({
                "id": book.get("id"),
                "title": book.get("title"),
                "authors": book.get("authors")
            })

        return simplified_results

    tools = [
      {
        "type": "function",
        "function": {
          "name": "search_gutenberg_books",
          "description": "Search for books in the Project Gutenberg library based on specified search terms",
          "parameters": {
            "type": "object",
            "properties": {
              "search_terms": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "description": "List of search terms to find books in the Gutenberg library (e.g. ['dickens', 'great'] to search for books by Dickens with 'great' in the title)"
              }
            },
            "required": ["search_terms"]
          }
        }
      }
    ]

    TOOL_MAPPING = {
        "search_gutenberg_books": search_gutenberg_books
    }

    ```
  </CodeGroup>
</Template>

Note that the "tool" is just a normal function. We then write a JSON "spec" compatible with the OpenAI function calling parameter. We'll pass that spec to the LLM so that it knows this tool is available and how to use it. It will request the tool when needed, along with any arguments. We'll then marshal the tool call locally, make the function call, and return the results to the LLM.

### Tool use and tool results

Let's make the first OpenRouter API call to the model:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemini-3-flash-preview'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    const result = await openRouter.chat.send({
      model: '{{MODEL}}',
      tools,
      messages,
      stream: false,
    });

    const response_1 = result.choices[0].message;
    ```

    ```python
    request_1 = {
        "model": {{MODEL}},
        "tools": tools,
        "messages": messages
    }

    response_1 = openai_client.chat.completions.create(**request_1).message
    ```

    ```typescript title="TypeScript (fetch)"
    const request_1 = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer {{API_KEY_REF}}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        tools,
        messages,
      }),
    });

    const data = await request_1.json();
    const response_1 = data.choices[0].message;
    ```
  </CodeGroup>
</Template>

The LLM responds with a finish reason of `tool_calls`, and a `tool_calls` array. In a generic LLM response-handler, you would want to check the `finish_reason` before processing tool calls, but here we will assume it's the case. Let's keep going, by processing the tool call:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemini-3-flash-preview'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    // Append the response to the messages array so the LLM has the full context
    // It's easy to forget this step!
    messages.push(response_1);

    // Now we process the requested tool calls, and use our book lookup tool
    for (const toolCall of response_1.tool_calls) {
      const toolName = toolCall.function.name;
      const { search_params } = JSON.parse(toolCall.function.arguments);
      const toolResponse = await TOOL_MAPPING[toolName](search_params);
      messages.push({
        role: 'tool',
        toolCallId: toolCall.id,
        name: toolName,
        content: JSON.stringify(toolResponse),
      });
    }
    ```

    ```python
    # Append the response to the messages array so the LLM has the full context
    # It's easy to forget this step!
    messages.append(response_1)

    # Now we process the requested tool calls, and use our book lookup tool
    for tool_call in response_1.tool_calls:
        '''
        In this case we only provided one tool, so we know what function to call.
        When providing multiple tools, you can inspect `tool_call.function.name`
        to figure out what function you need to call locally.
        '''
        tool_name = tool_call.function.name
        tool_args = json.loads(tool_call.function.arguments)
        tool_response = TOOL_MAPPING[tool_name](**tool_args)
        messages.append({
          "role": "tool",
          "tool_call_id": tool_call.id,
          "content": json.dumps(tool_response),
        })
    ```
  </CodeGroup>
</Template>

The messages array now has:

1. Our original request
2. The LLM's response (containing a tool call request)
3. The result of the tool call (a json object returned from the Project Gutenberg API)

Now, we can make a second OpenRouter API call, and hopefully get our result!

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemini-3-flash-preview'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    const response_2 = await openRouter.chat.send({
      model: '{{MODEL}}',
      messages,
      tools,
      stream: false,
    });

    console.log(response_2.choices[0].message.content);
    ```

    ```python
    request_2 = {
      "model": MODEL,
      "messages": messages,
      "tools": tools
    }

    response_2 = openai_client.chat.completions.create(**request_2)

    print(response_2.choices[0].message.content)
    ```

    ```typescript title="TypeScript (fetch)"
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer {{API_KEY_REF}}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        messages,
        tools,
      }),
    });

    const data = await response.json();
    console.log(data.choices[0].message.content);
    ```
  </CodeGroup>
</Template>

The output will be something like:

```text
Here are some books by James Joyce:

*   *Ulysses*
*   *Dubliners*
*   *A Portrait of the Artist as a Young Man*
*   *Chamber Music*
*   *Exiles: A Play in Three Acts*
```

We did it! We've successfully used a tool in a prompt.

## Interleaved Thinking

Interleaved thinking allows models to reason between tool calls, enabling more sophisticated decision-making after receiving tool results. This feature helps models chain multiple tool calls with reasoning steps in between and make nuanced decisions based on intermediate results.

**Important**: Interleaved thinking increases token usage and response latency. Consider your budget and performance requirements when enabling this feature.

### How Interleaved Thinking Works

With interleaved thinking, the model can:

* Reason about the results of a tool call before deciding what to do next
* Chain multiple tool calls with reasoning steps in between
* Make more nuanced decisions based on intermediate results
* Provide transparent reasoning for its tool selection process

### Example: Multi-Step Research with Reasoning

Here's an example showing how a model might use interleaved thinking to research a topic across multiple sources:

**Initial Request:**

```json
{
  "model": "anthropic/claude-sonnet-4.5",
  "messages": [
    {
      "role": "user",
      "content": "Research the environmental impact of electric vehicles and provide a comprehensive analysis."
    }
  ],
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "search_academic_papers",
        "description": "Search for academic papers on a given topic",
        "parameters": {
          "type": "object",
          "properties": {
            "query": {"type": "string"},
            "field": {"type": "string"}
          },
          "required": ["query"]
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "get_latest_statistics",
        "description": "Get latest statistics on a topic",
        "parameters": {
          "type": "object",
          "properties": {
            "topic": {"type": "string"},
            "year": {"type": "integer"}
          },
          "required": ["topic"]
        }
      }
    }
  ]
}
```

**Model's Reasoning and Tool Calls:**

1. **Initial Thinking**: "I need to research electric vehicle environmental impact. Let me start with academic papers to get peer-reviewed research."

2. **First Tool Call**: `search_academic_papers({"query": "electric vehicle lifecycle environmental impact", "field": "environmental science"})`

3. **After First Tool Result**: "The papers show mixed results on manufacturing impact. I need current statistics to complement this academic research."

4. **Second Tool Call**: `get_latest_statistics({"topic": "electric vehicle carbon footprint", "year": 2024})`

5. **After Second Tool Result**: "Now I have both academic research and current data. Let me search for manufacturing-specific studies to address the gaps I found."

6. **Third Tool Call**: `search_academic_papers({"query": "electric vehicle battery manufacturing environmental cost", "field": "materials science"})`

7. **Final Analysis**: Synthesizes all gathered information into a comprehensive response.

### Best Practices for Interleaved Thinking

* **Clear Tool Descriptions**: Provide detailed descriptions so the model can reason about when to use each tool
* **Structured Parameters**: Use well-defined parameter schemas to help the model make precise tool calls
* **Context Preservation**: Maintain conversation context across multiple tool interactions
* **Error Handling**: Design tools to provide meaningful error messages that help the model adjust its approach

### Implementation Considerations

When implementing interleaved thinking:

* Models may take longer to respond due to additional reasoning steps
* Token usage will be higher due to the reasoning process
* The quality of reasoning depends on the model's capabilities
* Some models may be better suited for this approach than others

## A Simple Agentic Loop

In the example above, the calls are made explicitly and sequentially. To handle a wide variety of user inputs and tool calls, you can use an agentic loop.

Here's an example of a simple agentic loop (using the same `tools` and initial `messages` as above):

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemini-3-flash-preview'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    async function callLLM(messages: Message[]): Promise<ChatResponse> {
      const result = await openRouter.chat.send({
        model: '{{MODEL}}',
        tools,
        messages,
        stream: false,
      });

      messages.push(result.choices[0].message);
      return result;
    }

    async function getToolResponse(response: ChatResponse): Promise<Message> {
      const toolCall = response.choices[0].message.toolCalls[0];
      const toolName = toolCall.function.name;
      const toolArgs = JSON.parse(toolCall.function.arguments);

      // Look up the correct tool locally, and call it with the provided arguments
      // Other tools can be added without changing the agentic loop
      const toolResult = await TOOL_MAPPING[toolName](toolArgs);

      return {
        role: 'tool',
        toolCallId: toolCall.id,
        content: toolResult,
      };
    }

    const maxIterations = 10;
    let iterationCount = 0;

    while (iterationCount < maxIterations) {
      iterationCount++;
      const response = await callLLM(messages);

      if (response.choices[0].message.toolCalls) {
        messages.push(await getToolResponse(response));
      } else {
        break;
      }
    }

    if (iterationCount >= maxIterations) {
      console.warn("Warning: Maximum iterations reached");
    }

    console.log(messages[messages.length - 1].content);
    ```

    ```python

    def call_llm(msgs):
        resp = openai_client.chat.completions.create(
            model={{MODEL}},
            tools=tools,
            messages=msgs
        )
        msgs.append(resp.choices[0].message.dict())
        return resp

    def get_tool_response(response):
        tool_call = response.choices[0].message.tool_calls[0]
        tool_name = tool_call.function.name
        tool_args = json.loads(tool_call.function.arguments)

        # Look up the correct tool locally, and call it with the provided arguments
        # Other tools can be added without changing the agentic loop
        tool_result = TOOL_MAPPING[tool_name](**tool_args)

        return {
            "role": "tool",
            "tool_call_id": tool_call.id,
            "content": tool_result,
        }

    max_iterations = 10
    iteration_count = 0

    while iteration_count < max_iterations:
        iteration_count += 1
        resp = call_llm(_messages)

        if resp.choices[0].message.tool_calls is not None:
            messages.append(get_tool_response(resp))
        else:
            break

    if iteration_count >= max_iterations:
        print("Warning: Maximum iterations reached")

    print(messages[-1]['content'])

    ```
  </CodeGroup>
</Template>

## Best Practices and Advanced Patterns

### Function Definition Guidelines

When defining tools for LLMs, follow these best practices:

**Clear and Descriptive Names**: Use descriptive function names that clearly indicate the tool's purpose.

```json
// Good: Clear and specific
{ "name": "get_weather_forecast" }
```

```json
// Avoid: Too vague
{ "name": "weather" }
```

**Comprehensive Descriptions**: Provide detailed descriptions that help the model understand when and how to use the tool.

```json
{
  "description": "Get current weather conditions and 5-day forecast for a specific location. Supports cities, zip codes, and coordinates.",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "City name, zip code, or coordinates (lat,lng). Examples: 'New York', '10001', '40.7128,-74.0060'"
      },
      "units": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"],
        "description": "Temperature unit preference",
        "default": "celsius"
      }
    },
    "required": ["location"]
  }
}
```

### Streaming with Tool Calls

When using streaming responses with tool calls, handle the different content types appropriately:

```typescript
const stream = await fetch('/api/chat/completions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'anthropic/claude-sonnet-4.5',
    messages: messages,
    tools: tools,
    stream: true
  })
});

const reader = stream.body.getReader();
let toolCalls = [];

while (true) {
  const { done, value } = await reader.read();
  if (done) {
    break;
  }

  const chunk = new TextDecoder().decode(value);
  const lines = chunk.split('\n').filter(line => line.trim());

  for (const line of lines) {
    if (line.startsWith('data: ')) {
      const data = JSON.parse(line.slice(6));

      if (data.choices[0].delta.tool_calls) {
        toolCalls.push(...data.choices[0].delta.tool_calls);
      }

      if (data.choices[0].delta.finish_reason === 'tool_calls') {
        await handleToolCalls(toolCalls);
      } else if (data.choices[0].delta.finish_reason === 'stop') {
        // Regular completion without tool calls
        break;
      }
    }
  }
}
```

### Tool Choice Configuration

Control tool usage with the `tool_choice` parameter:

```json
// Let model decide (default)
{ "tool_choice": "auto" }
```

```json
// Disable tool usage
{ "tool_choice": "none" }
```

```json
// Force specific tool
{
  "tool_choice": {
    "type": "function",
    "function": {"name": "search_database"}
  }
}
```

### Parallel Tool Calls

Control whether multiple tools can be called simultaneously with the `parallel_tool_calls` parameter (default is true for most models):

```json
// Disable parallel tool calls - tools will be called sequentially
{ "parallel_tool_calls": false }
```

When `parallel_tool_calls` is `false`, the model will only request one tool call at a time instead of potentially multiple calls in parallel.

### Multi-Tool Workflows

Design tools that work well together:

```json
{
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "search_products",
        "description": "Search for products in the catalog"
      }
    },
    {
      "type": "function",
      "function": {
        "name": "get_product_details",
        "description": "Get detailed information about a specific product"
      }
    },
    {
      "type": "function",
      "function": {
        "name": "check_inventory",
        "description": "Check current inventory levels for a product"
      }
    }
  ]
}
```

This allows the model to naturally chain operations: search → get details → check inventory.

For more details on OpenRouter's message format and tool parameters, see the [API Reference](https://openrouter.ai/docs/api-reference/overview).
***

title: Plugins
subtitle: Extend model capabilities with OpenRouter plugins
headline: Plugins | Extend AI Model Capabilities
canonical-url: '[https://openrouter.ai/docs/guides/features/plugins](https://openrouter.ai/docs/guides/features/plugins)'
'og:site\_name': OpenRouter Documentation
'og:title': Plugins - Extend AI Model Capabilities
'og:description': >-
Enable powerful plugins like web search, PDF processing, and response healing
to extend any model's capabilities on OpenRouter.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Plugins\&description=Extend%20AI%20Model%20Capabilities](https://openrouter.ai/dynamic-og?title=Plugins\&description=Extend%20AI%20Model%20Capabilities)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

OpenRouter plugins extend the capabilities of any model by adding features like real-time web search, PDF processing, and automatic JSON repair. Plugins can be enabled per-request via the API or configured as defaults for all your API requests through the [Plugins settings page](https://openrouter.ai/settings/plugins).

## Available Plugins

OpenRouter currently supports the following plugins:

| Plugin               | Description                                             | Docs                                                               |
| -------------------- | ------------------------------------------------------- | ------------------------------------------------------------------ |
| **Web Search**       | Augment LLM responses with real-time web search results | [Web Search](/docs/guides/features/plugins/web-search)             |
| **PDF Inputs**       | Parse and extract content from uploaded PDF files       | [PDF Inputs](/docs/guides/overview/multimodal/pdfs)                |
| **Response Healing** | Automatically fix malformed JSON responses from LLMs    | [Response Healing](/docs/guides/features/plugins/response-healing) |

## Enabling Plugins via API

Plugins are enabled by adding a `plugins` array to your chat completions request. Each plugin is identified by its `id` and can include optional configuration parameters.

<Template
  data={{
  API_KEY_REF,
  MODEL: 'openai/gpt-5.2'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript"
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer {{API_KEY_REF}}',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        messages: [
          {
            role: 'user',
            content: 'What are the latest developments in AI?'
          }
        ],
        plugins: [
          { id: 'web' }
        ]
      }),
    });

    const data = await response.json();
    console.log(data.choices[0].message.content);
    ```

    ```python title="Python"
    import requests

    response = requests.post(
      "https://openrouter.ai/api/v1/chat/completions",
      headers={
        "Authorization": f"Bearer {{API_KEY_REF}}",
        "Content-Type": "application/json",
      },
      json={
        "model": "{{MODEL}}",
        "messages": [
          {
            "role": "user",
            "content": "What are the latest developments in AI?"
          }
        ],
        "plugins": [
          {"id": "web"}
        ]
      }
    )

    data = response.json()
    print(data["choices"][0]["message"]["content"])
    ```

    ```bash title="cURL"
    curl https://openrouter.ai/api/v1/chat/completions \
      -H "Authorization: Bearer {{API_KEY_REF}}" \
      -H "Content-Type: application/json" \
      -d '{
        "model": "{{MODEL}}",
        "messages": [
          {
            "role": "user",
            "content": "What are the latest developments in AI?"
          }
        ],
        "plugins": [
          {"id": "web"}
        ]
      }'
    ```
  </CodeGroup>
</Template>

## Using Multiple Plugins

You can enable multiple plugins in a single request:

```json
{
  "model": "openai/gpt-5.2",
  "messages": [...],
  "plugins": [
    { "id": "web", "max_results": 3 },
    { "id": "response-healing" }
  ],
  "response_format": {
    "type": "json_schema",
    "json_schema": { ... }
  }
}
```

## Default Plugin Settings

Organization admins and individual users can configure default plugin settings that apply to all API requests. This is useful for:

* Enabling plugins like web search or response healing by default across all requests
* Setting consistent plugin configurations without modifying application code
* Enforcing plugin settings that cannot be overridden by individual requests

To configure default plugin settings:

1. Navigate to [Settings > Plugins](https://openrouter.ai/settings/plugins)
2. Toggle plugins on/off to enable them by default
3. Click the configure button to customize plugin settings
4. Optionally enable "Prevent overrides" to enforce settings across all requests

<Warning>
  In organizations, the Plugins settings page is only accessible to admins.
</Warning>

<Note>
  When "Prevent overrides" is enabled for a plugin, individual API requests cannot disable or modify that plugin's configuration. This is useful for enforcing organization-wide policies.
</Note>

### Plugin precedence

Plugin settings are applied in the following order of precedence:

1. **Request-level settings**: Plugin configurations in the `plugins` array of individual requests
2. **Account defaults**: Settings configured in the Plugins settings page

If a plugin is enabled in your account defaults but not specified in a request, the default configuration will be applied. If you specify a plugin in your request, those settings will override the defaults.

If you want the account setting to take precedence, toggle on "Prevent overrides" in the config for the plugin. It will then be impossible for generations to override the config.

### Disabling a default plugin

If a plugin is enabled by default in your account settings, you can disable it for a specific request by passing `"enabled": false` in the plugins array:

```json
{
  "model": "openai/gpt-5.2",
  "messages": [...],
  "plugins": [
    { "id": "web", "enabled": false }
  ]
}
```

This will turn off the web search plugin for that particular request, even if it's enabled in your account defaults.

## Model Variants as Plugin Shortcuts

Some plugins have convenient model variant shortcuts. For example, appending `:online` to any model ID enables web search:

```json
{
  "model": "openai/gpt-5.2:online"
}
```

This is equivalent to:

```json
{
  "model": "openai/gpt-4o",
  "plugins": [{ "id": "web" }]
}
```

See [Model Variants](/docs/routing/model-variants) for more information about available shortcuts.
***

title: Web Search
subtitle: Model-agnostic grounding
headline: Web Search | Add Real-time Web Data to AI Model Responses
canonical-url: '[https://openrouter.ai/docs/guides/features/plugins/web-search](https://openrouter.ai/docs/guides/features/plugins/web-search)'
'og:site\_name': OpenRouter Documentation
'og:title': Web Search - Real-time Web Grounding for AI Models
'og:description': >-
Enable real-time web search capabilities in your AI model responses. Add
factual, up-to-date information to any model's output with OpenRouter's web
search feature.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?pathname=features/web-search\&title=Web%20Search\&description=Add%20real-time%20web%20data%20to%20any%20AI%20model%20response](https://openrouter.ai/dynamic-og?pathname=features/web-search\&title=Web%20Search\&description=Add%20real-time%20web%20data%20to%20any%20AI%20model%20response)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

You can incorporate relevant web search results for *any* model on OpenRouter by activating and customizing the `web` plugin, or by appending `:online` to the model slug:

```json
{
  "model": "openai/gpt-5.2:online"
}
```

You can also append `:online` to `:free` model variants like so:

```json
{
  "model": "openai/gpt-oss-20b:free:online"
}
```

<Note>
  Using web search will incur extra costs, even with free models. See the [pricing section](#pricing) below for details.
</Note>

`:online` is a shortcut for using the `web` plugin, and is exactly equivalent to:

```json
{
  "model": "openrouter/auto",
  "plugins": [{ "id": "web" }]
}
```

The web search plugin is powered by native search for Anthropic, OpenAI, Perplexity, and xAI models.

<Note>
  For xAI models, the web search plugin enables both Web Search and X Search.
</Note>

For other models, the web search plugin is powered by [Exa](https://exa.ai). It uses their ["auto"](https://docs.exa.ai/reference/how-exa-search-works#combining-neural-and-keyword-the-best-of-both-worlds-through-exa-auto-search) method (a combination of keyword search and embeddings-based web search) to find the most relevant results and augment/ground your prompt.

## Parsing web search results

Web search results for all models (including native-only models like Perplexity and OpenAI Online) are available in the API and standardized by OpenRouter to follow the same annotation schema in the [OpenAI Chat Completion Message type](https://platform.openai.com/docs/api-reference/chat/object):

```json
{
  "message": {
    "role": "assistant",
    "content": "Here's the latest news I found: ...",
    "annotations": [
      {
        "type": "url_citation",
        "url_citation": {
          "url": "https://www.example.com/web-search-result",
          "title": "Title of the web search result",
          "content": "Content of the web search result", // Added by OpenRouter if available
          "start_index": 100, // The index of the first character of the URL citation in the message.
          "end_index": 200 // The index of the last character of the URL citation in the message.
        }
      }
    ]
  }
}
```

## Customizing the Web Plugin

The maximum results allowed by the web plugin and the prompt used to attach them to your message stream can be customized:

```json
{
  "model": "openai/gpt-5.2:online",
  "plugins": [
    {
      "id": "web",
      "engine": "exa", // Optional: "native", "exa", or undefined
      "max_results": 1, // Defaults to 5
      "search_prompt": "Some relevant web results:" // See default below
    }
  ]
}
```

By default, the web plugin uses the following search prompt, using the current date:

```
A web search was conducted on `date`. Incorporate the following web search results into your response.

IMPORTANT: Cite them using markdown links named using the domain of the source.
Example: [nytimes.com](https://nytimes.com/some-page).
```

## Engine Selection

The web search plugin supports the following options for the `engine` parameter:

* **`native`**: Always uses the model provider's built-in web search capabilities
* **`exa`**: Uses Exa's search API for web results
* **`undefined` (not specified)**: Uses native search if available for the provider, otherwise falls back to Exa

### Default Behavior

When the `engine` parameter is not specified:

* **Native search is used by default** for OpenAI, Anthropic, Perplexity, and xAI models that support it
* **Exa search is used** for all other models or when native search is not supported

When you explicitly specify `"engine": "native"`, it will always attempt to use the provider's native search, even if the model doesn't support it (which may result in an error).

### Forcing Engine Selection

You can explicitly specify which engine to use:

```json
{
  "model": "openai/gpt-5.2",
  "plugins": [
    {
      "id": "web",
      "engine": "native"
    }
  ]
}
```

Or force Exa search even for models that support native search:

```json
{
  "model": "openai/gpt-5.2",
  "plugins": [
    {
      "id": "web",
      "engine": "exa",
      "max_results": 3
    }
  ]
}
```

### Engine-Specific Pricing

* **Native search**: Pricing is passed through directly from the provider (see provider-specific pricing info below)
* **Exa search**: Uses OpenRouter credits at \$4 per 1000 results (default 5 results = \$0.02 per request)

## Pricing

### Exa Search Pricing

When using Exa search (either explicitly via `"engine": "exa"` or as fallback), the web plugin uses your OpenRouter credits and charges *\$4 per 1000 results*. By default, `max_results` set to 5, this comes out to a maximum of \$0.02 per request, in addition to the LLM usage for the search result prompt tokens.

### Native Search Pricing (Provider Passthrough)

Some models have built-in web search. These models charge a fee based on the search context size, which determines how much search data is retrieved and processed for a query.

### Search Context Size Thresholds

Search context can be 'low', 'medium', or 'high' and determines how much search context is retrieved for a query:

* **Low**: Minimal search context, suitable for basic queries
* **Medium**: Moderate search context, good for general queries
* **High**: Extensive search context, ideal for detailed research

### Specifying Search Context Size

You can specify the search context size in your API request using the `web_search_options` parameter:

```json
{
  "model": "openai/gpt-4.1",
  "messages": [
    {
      "role": "user",
      "content": "What are the latest developments in quantum computing?"
    }
  ],
  "web_search_options": {
    "search_context_size": "high"
  }
}
```

<Note title="Native Web Search Pricing">
  Refer to each provider's documentation for their native web search pricing info:

  * [OpenAI Pricing](https://platform.openai.com/docs/pricing#built-in-tools)
  * [Anthropic Pricing](https://docs.claude.com/en/docs/agents-and-tools/tool-use/web-search-tool#usage-and-pricing)
  * [Perplexity Pricing](https://docs.perplexity.ai/getting-started/pricing)
  * [xAI Pricing](https://docs.x.ai/docs/models#tool-invocation-costs)

  Native web search pricing only applies when using `"engine": "native"` or when native search is used by default for supported models. When using `"engine": "exa"`, the Exa search pricing applies instead.
</Note>
***

title: Response Healing
subtitle: Automatically fix malformed JSON responses
headline: Response Healing | Validate and Repair AI Model Responses
canonical-url: '[https://openrouter.ai/docs/guides/features/plugins/response-healing](https://openrouter.ai/docs/guides/features/plugins/response-healing)'
'og:site\_name': OpenRouter Documentation
'og:title': Response Healing - Fix Malformed JSON from AI Models
'og:description': >-
Automatically validate and repair malformed JSON responses from AI models.
Ensure your responses match your schema even when models return imperfect
formatting.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Response%20Healing\&description=Validate%20and%20Repair%20AI%20Model%20Responses](https://openrouter.ai/dynamic-og?title=Response%20Healing\&description=Validate%20and%20Repair%20AI%20Model%20Responses)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

The Response Healing plugin automatically validates and repairs malformed JSON responses from AI models. When models return imperfect formatting – missing brackets, trailing commas, markdown wrappers, or mixed text – this plugin attempts to repair the response so you receive valid, parseable JSON.

## Overview

Response Healing provides:

* **Automatic JSON repair**: Fixes missing brackets, commas, quotes, and other syntax errors
* **Markdown extraction**: Extracts JSON from markdown code blocks

## How It Works

The plugin activates for non-streaming requests when you use `response_format` with either `type: "json_schema"` or `type: "json_object"`, and include the response-healing plugin in your `plugins` array. See the [Complete Example](#complete-example) below for a full implementation.

## What Gets Fixed

The Response Healing plugin handles common issues in LLM responses:

### JSON Syntax Errors

**Input:** Missing closing bracket

```text
{"name": "Alice", "age": 30
```

**Output:** Fixed

```json
{"name": "Alice", "age": 30}
```

### Markdown Code Blocks

**Input:** Wrapped in markdown

````text
```json
{"name": "Bob"}
```
````

**Output:** Extracted

```json
{"name": "Bob"}
```

### Mixed Text and JSON

**Input:** Text before JSON

```text
Here's the data you requested:
{"name": "Charlie", "age": 25}
```

**Output:** Extracted

```json
{"name": "Charlie", "age": 25}
```

### Trailing Commas

**Input:** Invalid trailing comma

```text
{"name": "David", "age": 35,}
```

**Output:** Fixed

```json
{"name": "David", "age": 35}
```

### Unquoted Keys

**Input:** JavaScript-style

```text
{name: "Eve", age: 40}
```

**Output:** Fixed

```json
{"name": "Eve", "age": 40}
```

## Complete Example

<Template
  data={{
  API_KEY_REF,
  MODEL: 'google/gemini-2.5-flash'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript"
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer {{API_KEY_REF}}',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        messages: [
          {
            role: 'user',
            content: 'Generate a product listing with name, price, and description'
          }
        ],
        response_format: {
          type: 'json_schema',
          json_schema: {
            name: 'Product',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'Product name'
                },
                price: {
                  type: 'number',
                  description: 'Price in USD'
                },
                description: {
                  type: 'string',
                  description: 'Product description'
                }
              },
              required: ['name', 'price']
            }
          }
        },
        plugins: [
          { id: 'response-healing' }
        ]
      }),
    });

    const data = await response.json();
    const product = JSON.parse(data.choices[0].message.content);
    // The plugin attempts to repair malformed JSON syntax
    console.log(product.name, product.price);
    ```

    ```python title="Python"
    import requests
    import json

    response = requests.post(
      "https://openrouter.ai/api/v1/chat/completions",
      headers={
        "Authorization": f"Bearer {{API_KEY_REF}}",
        "Content-Type": "application/json",
      },
      json={
        "model": "{{MODEL}}",
        "messages": [
          {
            "role": "user",
            "content": "Generate a product listing with name, price, and description"
          }
        ],
        "response_format": {
          "type": "json_schema",
          "json_schema": {
            "name": "Product",
            "schema": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "description": "Product name"
                },
                "price": {
                  "type": "number",
                  "description": "Price in USD"
                },
                "description": {
                  "type": "string",
                  "description": "Product description"
                }
              },
              "required": ["name", "price"]
            }
          }
        },
        "plugins": [
          {"id": "response-healing"}
        ]
      }
    )

    data = response.json()
    product = json.loads(data["choices"][0]["message"]["content"])
    # The plugin attempts to repair malformed JSON syntax
    print(product["name"], product["price"])
    ```
  </CodeGroup>
</Template>

## Limitations

<Warning title="Non-Streaming Requests Only">
  Response Healing only applies to non-streaming requests.
</Warning>

<Warning title="Will not repair all JSON">
  Some malformed JSON responses may still be unrepairable. In particular, if the response is truncated by `max_tokens`, the plugin will not be able to repair it.
</Warning>
***

title: Structured Outputs
subtitle: Return structured data from your models
headline: Structured Outputs | Enforce JSON Schema in OpenRouter API Responses
canonical-url: '[https://openrouter.ai/docs/guides/features/structured-outputs](https://openrouter.ai/docs/guides/features/structured-outputs)'
'og:site\_name': OpenRouter Documentation
'og:title': Structured Outputs - Type-Safe JSON Responses from AI Models
'og:description': >-
Enforce JSON Schema validation on AI model responses. Get consistent,
type-safe outputs and avoid parsing errors with OpenRouter's structured output
feature.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Structured%20Outputs\&description=Type-Safe%20JSON%20Responses%20from%20AI%20Models](https://openrouter.ai/dynamic-og?title=Structured%20Outputs\&description=Type-Safe%20JSON%20Responses%20from%20AI%20Models)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

OpenRouter supports structured outputs for compatible models, ensuring responses follow a specific JSON Schema format. This feature is particularly useful when you need consistent, well-formatted responses that can be reliably parsed by your application.

## Overview

Structured outputs allow you to:

* Enforce specific JSON Schema validation on model responses
* Get consistent, type-safe outputs
* Avoid parsing errors and hallucinated fields
* Simplify response handling in your application

## Using Structured Outputs

To use structured outputs, include a `response_format` parameter in your request, with `type` set to `json_schema` and the `json_schema` object containing your schema:

```typescript
{
  "messages": [
    { "role": "user", "content": "What's the weather like in London?" }
  ],
  "response_format": {
    "type": "json_schema",
    "json_schema": {
      "name": "weather",
      "strict": true,
      "schema": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "City or location name"
          },
          "temperature": {
            "type": "number",
            "description": "Temperature in Celsius"
          },
          "conditions": {
            "type": "string",
            "description": "Weather conditions description"
          }
        },
        "required": ["location", "temperature", "conditions"],
        "additionalProperties": false
      }
    }
  }
}
```

The model will respond with a JSON object that strictly follows your schema:

```json
{
  "location": "London",
  "temperature": 18,
  "conditions": "Partly cloudy with light drizzle"
}
```

## Model Support

Structured outputs are supported by select models.

You can find a list of models that support structured outputs on the [models page](https://openrouter.ai/models?order=newest\&supported_parameters=structured_outputs).

* OpenAI models (GPT-4o and later versions) [Docs](https://platform.openai.com/docs/guides/structured-outputs)
* Google Gemini models [Docs](https://ai.google.dev/gemini-api/docs/structured-output)
* Anthropic models (Sonnet 4.5 and Opus 4.1) [Docs](https://docs.claude.com/en/docs/build-with-claude/structured-outputs)
* Most open-source models
* All Fireworks provided models [Docs](https://docs.fireworks.ai/structured-responses/structured-response-formatting#structured-response-modes)

To ensure your chosen model supports structured outputs:

1. Check the model's supported parameters on the [models page](https://openrouter.ai/models)
2. Set `require_parameters: true` in your provider preferences (see [Provider Routing](/docs/features/provider-routing))
3. Include `response_format` and set `type: json_schema` in the required parameters

## Best Practices

1. **Include descriptions**: Add clear descriptions to your schema properties to guide the model

2. **Use strict mode**: Always set `strict: true` to ensure the model follows your schema exactly

## Example Implementation

Here's a complete example using the Fetch API:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'openai/gpt-4'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    import { OpenRouter } from '@openrouter/sdk';

    const openRouter = new OpenRouter({
      apiKey: '{{API_KEY_REF}}',
    });

    const response = await openRouter.chat.send({
      model: '{{MODEL}}',
      messages: [
        { role: 'user', content: 'What is the weather like in London?' },
      ],
      responseFormat: {
        type: 'json_schema',
        jsonSchema: {
          name: 'weather',
          strict: true,
          schema: {
            type: 'object',
            properties: {
              location: {
                type: 'string',
                description: 'City or location name',
              },
              temperature: {
                type: 'number',
                description: 'Temperature in Celsius',
              },
              conditions: {
                type: 'string',
                description: 'Weather conditions description',
              },
            },
            required: ['location', 'temperature', 'conditions'],
            additionalProperties: false,
          },
        },
      },
      stream: false,
    });

    const weatherInfo = response.choices[0].message.content;
    ```

    ```python title="Python"
    import requests
    import json

    response = requests.post(
      "https://openrouter.ai/api/v1/chat/completions",
      headers={
        "Authorization": f"Bearer {{API_KEY_REF}}",
        "Content-Type": "application/json",
      },

      json={
        "model": "{{MODEL}}",
        "messages": [
          {"role": "user", "content": "What is the weather like in London?"},
        ],
        "response_format": {
          "type": "json_schema",
          "json_schema": {
            "name": "weather",
            "strict": True,
            "schema": {
              "type": "object",
              "properties": {
                "location": {
                  "type": "string",
                  "description": "City or location name",
                },
                "temperature": {
                  "type": "number",
                  "description": "Temperature in Celsius",
                },
                "conditions": {
                  "type": "string",
                  "description": "Weather conditions description",
                },
              },
              "required": ["location", "temperature", "conditions"],
              "additionalProperties": False,
            },
          },
        },
      },
    )

    data = response.json()
    weather_info = data["choices"][0]["message"]["content"]
    ```

    ```typescript title="TypeScript (fetch)"
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer {{API_KEY_REF}}',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        messages: [
          { role: 'user', content: 'What is the weather like in London?' },
        ],
        response_format: {
          type: 'json_schema',
          json_schema: {
            name: 'weather',
            strict: true,
            schema: {
              type: 'object',
              properties: {
                location: {
                  type: 'string',
                  description: 'City or location name',
                },
                temperature: {
                  type: 'number',
                  description: 'Temperature in Celsius',
                },
                conditions: {
                  type: 'string',
                  description: 'Weather conditions description',
                },
              },
              required: ['location', 'temperature', 'conditions'],
              additionalProperties: false,
            },
          },
        },
      }),
    });

    const data = await response.json();
    const weatherInfo = data.choices[0].message.content;
    ```
  </CodeGroup>
</Template>

## Streaming with Structured Outputs

Structured outputs are also supported with streaming responses. The model will stream valid partial JSON that, when complete, forms a valid response matching your schema.

To enable streaming with structured outputs, simply add `stream: true` to your request:

```typescript
{
  "stream": true,
  "response_format": {
    "type": "json_schema",
    // ... rest of your schema
  }
}
```

## Error Handling

When using structured outputs, you may encounter these scenarios:

1. **Model doesn't support structured outputs**: The request will fail with an error indicating lack of support
2. **Invalid schema**: The model will return an error if your JSON Schema is invalid

## Response Healing

For non-streaming requests using `response_format` with `type: "json_schema"`, you can enable the [Response Healing](/docs/guides/features/plugins/response-healing) plugin to reduce the risk of invalid JSON when models return imperfect formatting. Learn more in the [Response Healing documentation](/docs/guides/features/plugins/response-healing).
***

title: Message Transforms
subtitle: Transform prompt messages
headline: Message Transforms | Pre-process AI Model Inputs with OpenRouter
canonical-url: '[https://openrouter.ai/docs/guides/features/message-transforms](https://openrouter.ai/docs/guides/features/message-transforms)'
'og:site\_name': OpenRouter Documentation
'og:title': Message Transforms - Optimize AI Model Inputs
'og:description': >-
Transform and optimize messages before sending them to AI models. Learn about
middle-out compression and context window optimization with OpenRouter.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Message%20Transforms\&description=Optimize%20AI%20model%20inputs%20with%20OpenRouter](https://openrouter.ai/dynamic-og?title=Message%20Transforms\&description=Optimize%20AI%20model%20inputs%20with%20OpenRouter)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

To help with prompts that exceed the maximum context size of a model, OpenRouter supports a custom parameter called `transforms`:

```typescript
{
  transforms: ["middle-out"], // Compress prompts that are > context size.
  messages: [...],
  model // Works with any model
}
```

This can be useful for situations where perfect recall is not required. The transform works by removing or truncating messages from the middle of the prompt, until the prompt fits within the model's context window.

In some cases, the issue is not the token context length, but the actual number of messages. The transform addresses this as well: For instance, Anthropic's Claude models enforce a maximum of {anthropicMaxMessagesCount} messages. When this limit is exceeded with middle-out enabled, the transform will keep half of the messages from the start and half from the end of the conversation.

When middle-out compression is enabled, OpenRouter will first try to find models whose context length is at least half of your total required tokens (input + completion). For example, if your prompt requires 10,000 tokens total, models with at least 5,000 context length will be considered. If no models meet this criteria, OpenRouter will fall back to using the model with the highest available context length.

The compression will then attempt to fit your content within the chosen model's context window by removing or truncating content from the middle of the prompt. If middle-out compression is disabled and your total tokens exceed the model's context length, the request will fail with an error message suggesting you either reduce the length or enable middle-out compression.

<Note>
  [All OpenRouter endpoints](/models) with 8k (8,192 tokens) or less context
  length will default to using `middle-out`. To disable this, set `transforms:   []` in the request body.
</Note>

The middle of the prompt is compressed because [LLMs pay less attention](https://arxiv.org/abs/2307.03172) to the middle of sequences.
***

title: Zero Completion Insurance
subtitle: OpenRouter will not charge you for zero token responses
headline: Zero Completion Insurance | No Charge for Zero Token Responses
canonical-url: '[https://openrouter.ai/docs/guides/features/zero-completion-insurance](https://openrouter.ai/docs/guides/features/zero-completion-insurance)'
'og:site\_name': OpenRouter Documentation
'og:title': Zero Completion Insurance - No Charge for Zero Token Responses
'og:description': >-
Learn how OpenRouter protects users from being charged for failed or empty AI
responses with zero completion insurance.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Zero%20Completion%20Insurance\&description=No%20Charge%20for%20Zero%20Token%20Responses](https://openrouter.ai/dynamic-og?title=Zero%20Completion%20Insurance\&description=No%20Charge%20for%20Zero%20Token%20Responses)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

OpenRouter provides zero completion insurance to protect users from being charged for failed or empty responses. When a response contains no output tokens and either has a blank finish reason or an error, you will not be charged for the request, even if the underlying provider charges for prompt processing.

<Note>
  Zero completion insurance is automatically enabled for all accounts and requires no configuration.
</Note>

## How It Works

Zero completion insurance automatically applies to all requests across all models and providers. When a response meets either of these conditions, no credits will be deducted from your account:

* The response has zero completion tokens AND a blank/null finish reason
* The response has an error finish reason

## Viewing Protected Requests

On your activity page, requests that were protected by zero completion insurance will show zero credits deducted. This applies even in cases where OpenRouter may have been charged by the provider for prompt processing.
***

title: Zero Data Retention
subtitle: How OpenRouter gives you control over your data
headline: Zero Data Retention | How OpenRouter gives you control over your data
canonical-url: '[https://openrouter.ai/docs/guides/features/zdr](https://openrouter.ai/docs/guides/features/zdr)'
'og:site\_name': OpenRouter Documentation
'og:title': Zero Data Retention - How OpenRouter gives you control over your data
'og:description': Learn how OpenRouter gives you control over your data
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Zero%20Data%20Retention\&description=How%20OpenRouter%20gives%20you%20control%20over%20your%20data](https://openrouter.ai/dynamic-og?title=Zero%20Data%20Retention\&description=How%20OpenRouter%20gives%20you%20control%20over%20your%20data)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

Zero Data Retention (ZDR) means that a provider will not store your data for any period of time.

OpenRouter has a [setting](/settings/privacy) that, when enabled, only allows you to route to endpoints that have a Zero Data Retention policy.

Providers that do not retain your data are also unable to train on your data. However we do have some endpoints & providers who do not train on your data but *do* retain it (e.g. to scan for abuse or for legal reasons). OpenRouter gives you controls over both of these policies.

## How OpenRouter Manages Data Policies

OpenRouter works with providers to understand each of their data policies and structures the policy data in a way that gives you control over which providers you want to route to.

Note that a provider's general policy may differ from the specific policy for a given endpoint. OpenRouter keeps track of the specific policy for each endpoint, works with providers to keep these policies up to date, and in some cases creates special agreements with providers to ensure data retention or training policies that are more privacy-focused than their default policies.

<Note>
  If OpenRouter is not able to establish or ascertain a clear policy for a provider or endpoint, we take a conservative stance and assume that the endpoint both retains and trains on data and mark it as such.
</Note>

A full list of providers and their data policies can be found [here](/docs/guides/privacy/logging#data-retention--logging). Note that this list shows the default policy for each provider; if there is a particular endpoint that has a policy that differs from the provider default, it may not be available if "ZDR Only" is enabled.

## Per-Request ZDR Enforcement

In addition to the global ZDR setting in your [privacy settings](/settings/privacy), you can enforce Zero Data Retention on a per-request basis using the `zdr` parameter in your API calls.

The request-level `zdr` parameter operates as an "OR" with your account-wide ZDR setting - if either is enabled, ZDR enforcement will be applied. This means the per-request parameter can only be used to ensure ZDR is enabled for a specific request, not to override or disable account-wide ZDR enforcement.

This is useful for customers who don't want to globally enforce ZDR but need to ensure specific requests only route to ZDR endpoints.

### Usage

Include the `zdr` parameter in your provider preferences:

```json
{
  "model": "gpt-4",
  "messages": [...],
  "provider": {
    "zdr": true
  }
}
```

When `zdr` is set to `true`, the request will only be routed to endpoints that have a Zero Data Retention policy. When `zdr` is `false` or not provided, ZDR enforcement will still apply if enabled in your account settings.

## Caching

Some endpoints/models provide implicit caching of prompts. This keeps repeated prompt data in an in-memory cache in the provider's datacenter, so that the repeated part of the prompt does not need to be re-processed. This can lead to considerable cost savings.

OpenRouter has taken the stance that in-memory caching of prompts is *not* considered "retaining" data, and we therefore allow endpoints/models with implicit caching to be hit when a ZDR routing policy is in effect.

## OpenRouter's Retention Policy

OpenRouter itself has a ZDR policy; your prompts are not retained unless you specifically opt in to prompt logging.

## Zero Retention Endpoints

The following endpoints have a ZDR policy. Note that this list is also available progammatically via [https://openrouter.ai/api/v1/endpoints/zdr](https://openrouter.ai/api/v1/endpoints/zdr). It is automatically updated when there are changes to a provider's data policy.:

<ZDREndpointsTable />
***

title: App Attribution
subtitle: Get your app featured in OpenRouter rankings and analytics
slug: app-attribution
headline: App Attribution | OpenRouter Documentation
canonical-url: '[https://openrouter.ai/docs/app-attribution](https://openrouter.ai/docs/app-attribution)'
'og:site\_name': OpenRouter Documentation
'og:title': App Attribution
'og:description': >-
Learn how to attribute your API usage to your app and appear in OpenRouter's
app rankings and model analytics.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?pathname=app-attribution\&title=App%20Attribution\&description=Get%20your%20app%20featured%20in%20rankings](https://openrouter.ai/dynamic-og?pathname=app-attribution\&title=App%20Attribution\&description=Get%20your%20app%20featured%20in%20rankings)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

App attribution allows developers to associate their API usage with their application, enabling visibility in OpenRouter's public rankings and detailed analytics. By including simple headers in your requests, your app can appear in our leaderboards and gain insights into your model usage patterns.

## Benefits of App Attribution

When you properly attribute your app usage, you gain access to:

* **Public App Rankings**: Your app appears in OpenRouter's [public rankings](https://openrouter.ai/rankings) with daily, weekly, and monthly leaderboards
* **Model Apps Tabs**: Your app is featured on individual model pages showing which apps use each model most
* **Detailed Analytics**: Access comprehensive analytics showing your app's model usage over time, token consumption, and usage patterns
* **Professional Visibility**: Showcase your app to the OpenRouter developer community

## Attribution Headers

OpenRouter tracks app attribution through these optional HTTP headers:

### HTTP-Referer

The `HTTP-Referer` header identifies your app's URL and is used as the primary identifier for rankings.

### X-OpenRouter-Title

The `X-OpenRouter-Title` header sets or modifies your app's display name
in rankings and analytics. `X-Title` is still supported for backwards compatibility.

### X-OpenRouter-Categories

The `X-OpenRouter-Categories` header assigns your app to one or more marketplace categories. Pass a comma-separated list of up to {MAX_CATEGORIES_PER_REQUEST} categories per request. Categories must be lowercase, hyphen-separated, and each category is limited to 30 characters. Only recognized categories from the list below are accepted; unrecognized ones are silently ignored. Categories are merged with any existing ones (up to {MAX_CATEGORIES_PER_APP} total).

#### Category Groups

Categories are organized into groups for the [marketplace](/apps):

**Coding** — Tools for software development:

* `cli-agent` — Terminal-based coding assistants
* `ide-extension` — Editor/IDE integrations
* `cloud-agent` — Cloud-hosted coding agents
* `programming-app` — Programming App

**Creative** — Creative apps:

*(No subcategories yet)*

**Productivity** — Writing and productivity tools:

* `writing-assistant` — AI-powered writing tools
* `general-chat` — General chat apps

**Entertainment** — Entertainment apps:

* `roleplay` — Roleplay apps and other character-based chat apps
* `game` — Gaming and interactive entertainment apps

#### Custom Categories

Only recognized categories from the list above are accepted.
Unrecognized values are silently dropped. If you have a use case
that doesn't fit the existing categories, reach out to us and
we may add new categories in the future.

<Tip>
  All three headers are optional, but including them
  enables all attribution features. Apps using localhost
  URLs must include a title to be tracked.
</Tip>

## Implementation Examples

<CodeGroup>
  ```typescript title="TypeScript SDK"
  import { OpenRouter } from '@openrouter/sdk';

  const openRouter = new OpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
    defaultHeaders: {
      'HTTP-Referer': 'https://myapp.com', // Your app's URL
      'X-OpenRouter-Title': 'My AI Assistant', // Your app's display name
      'X-OpenRouter-Categories': 'cli-agent,cloud-agent', // Optional categories
    },
  });

  const completion = await openRouter.chat.send({
    model: 'openai/gpt-5.2',
    messages: [
      {
        role: 'user',
        content: 'Hello, world!',
      },
    ],
    stream: false,
  });

  console.log(completion.choices[0].message);
  ```

  ```python title="Python (OpenAI SDK)"
  from openai import OpenAI

  client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="<OPENROUTER_API_KEY>",
  )

  completion = client.chat.completions.create(
    extra_headers={
      "HTTP-Referer": "https://myapp.com", # Your app's URL
      "X-OpenRouter-Title": "My AI Assistant", # Your app's display name
      "X-OpenRouter-Categories": "cli-agent,cloud-agent", # Optional
    },
    model="openai/gpt-5.2",
    messages=[
      {
        "role": "user",
        "content": "Hello, world!"
      }
    ]
  )
  ```

  ```typescript title="TypeScript (OpenAI SDK)"
  import OpenAI from 'openai';

  const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: '<OPENROUTER_API_KEY>',
    defaultHeaders: {
      'HTTP-Referer': 'https://myapp.com', // Your app's URL
      'X-OpenRouter-Title': 'My AI Assistant', // Your app's display name
      'X-OpenRouter-Categories': 'cli-agent,cloud-agent', // Optional
    },
  });

  async function main() {
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-5.2',
      messages: [
        {
          role: 'user',
          content: 'Hello, world!',
        },
      ],
    });

    console.log(completion.choices[0].message);
  }

  main();
  ```

  ```python title="Python (Direct API)"
  import requests
  import json

  response = requests.post(
    url="https://openrouter.ai/api/v1/chat/completions",
    headers={
      "Authorization": "Bearer <OPENROUTER_API_KEY>",
      "HTTP-Referer": "https://myapp.com", # Your app's URL
      "X-OpenRouter-Title": "My AI Assistant", # Your app's display name
      "X-OpenRouter-Categories": "cli-agent,cloud-agent", # Optional
      "Content-Type": "application/json",
    },
    data=json.dumps({
      "model": "openai/gpt-5.2",
      "messages": [
        {
          "role": "user",
          "content": "Hello, world!"
        }
      ]
    })
  )
  ```

  ```typescript title="TypeScript (fetch)"
  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer <OPENROUTER_API_KEY>',
      'HTTP-Referer': 'https://myapp.com', // Your app's URL
      'X-OpenRouter-Title': 'My AI Assistant', // Your app's display name
      'X-OpenRouter-Categories': 'cli-agent,cloud-agent', // Optional
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openai/gpt-5.2',
      messages: [
        {
          role: 'user',
          content: 'Hello, world!',
        },
      ],
    }),
  });
  ```

  ```shell title="cURL"
  curl https://openrouter.ai/api/v1/chat/completions \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENROUTER_API_KEY" \
    -H "HTTP-Referer: https://myapp.com" \
    -H "X-OpenRouter-Title: My AI Assistant" \
    -H "X-OpenRouter-Categories: cli-agent,cloud-agent" \
    -d '{
    "model": "openai/gpt-5.2",
    "messages": [
      {
        "role": "user",
        "content": "Hello, world!"
      }
    ]
  }'
  ```
</CodeGroup>

## Where Your App Appears

### App Rankings

Your attributed app will appear in OpenRouter's main rankings page at [openrouter.ai/rankings](https://openrouter.ai/rankings). The rankings show:

* **Top Apps**: Largest public apps by token usage
* **Time Periods**: Daily, weekly, and monthly views
* **Usage Metrics**: Total token consumption across all models

### Model Apps Tabs

On individual model pages (e.g., [GPT-4o](https://openrouter.ai/models/openai/gpt-4o)), your app will be featured in the "Apps" tab showing:

* **Top Apps**: Apps using that specific model most
* **Weekly Rankings**: Updated weekly based on usage
* **Usage Context**: How your app compares to others using the same model

### Individual App Analytics

Once your app is tracked, you can access detailed analytics at `openrouter.ai/apps?url=<your-app-url>` including:

* **Model Usage Over Time**: Charts showing which models your app uses
* **Token Consumption**: Detailed breakdown of prompt and completion tokens
* **Usage Patterns**: Historical data to understand your app's AI usage trends

## Best Practices

### URL Requirements

* Use your app's primary domain (e.g., `https://myapp.com`)
* Avoid using subdomains unless they represent distinct apps
* For localhost development, always include a title header

### Title Guidelines

* Keep titles concise and descriptive
* Use your app's actual name as users know it
* Avoid generic names like "AI App" or "Chatbot"

### Privacy Considerations

* Only public apps, meaning those that send headers, are included in rankings
* Attribution headers don't expose sensitive information about your requests

## Related Documentation

* [Quickstart Guide](/docs/quickstart) - Basic setup with attribution headers
* [API Reference](/docs/api-reference/overview) - Complete header documentation
* [Usage Accounting](/docs/use-cases/usage-accounting) - Understanding your API usage
***

title: Guardrails
subtitle: Control spending and model access for your organization
headline: Guardrails | OpenRouter Organization Controls
canonical-url: '[https://openrouter.ai/docs/guides/features/guardrails](https://openrouter.ai/docs/guides/features/guardrails)'
'og:site\_name': OpenRouter Documentation
'og:title': Guardrails - Organization Spending and Access Controls
'og:description': >-
Set spending limits, restrict model access, and enforce data policies for your
organization members and API keys with OpenRouter guardrails.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Guardrails\&description=Control%20spending%20and%20model%20access](https://openrouter.ai/dynamic-og?title=Guardrails\&description=Control%20spending%20and%20model%20access)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

Guardrails let organizations control how their members and API keys can use OpenRouter. You can set spending limits, restrict which models and providers are available, and enforce data privacy policies.

Any existing account wide settings will continue to apply. Guardrails help enforce tighter restrictions for individual API keys or users.

## Enabling Guardrails

To create and manage guardrails for your account or organization:

1. Navigate to [Settings > Privacy](https://openrouter.ai/settings/privacy) in your OpenRouter dashboard
2. Scroll to the Guardrails section
3. Click "New Guardrail" to create your first guardrail

<Tip>
  If you're using an organization account, you must be an organization admin to create and manage guardrails.
</Tip>

## Guardrail Settings

Each guardrail can include any combination of:

* **Budget limit** - Spending cap in USD that resets daily, weekly, or monthly. Requests are rejected when the limit is reached.
* **Model allowlist** - Restrict to specific models. Leave empty to allow all.
* **Provider allowlist** - Restrict to specific providers. Leave empty to allow all.
* **Zero Data Retention** - Require ZDR-compatible providers for all requests.

<Note>
  Individual API key budgets still apply. The lower limit wins.
</Note>

## Assigning Guardrails

Guardrails can be assigned at multiple levels:

* **Member assignments** - Assign to specific organization members. Sets a baseline for all their API keys and chatroom usage.
* **API key assignments** - Assign directly to specific keys for granular control. Layers on top of member guardrails.

Only one guardrail can be directly assigned to a user or key. All of an organization member's created API keys will implicitly follow that user's guardrail assignment, even if the API Key is further restricted with its own guardrail assignment.

## Guardrail Hierarchy

Account-wide privacy and provider settings are always enforced as a default guardrail. When additional guardrails apply to a request, they are combined using the following rules:

* **Provider allowlists**: Intersection across all guardrails (only providers allowed by all guardrails are available)
* **Model allowlists**: Intersection across all guardrails (only models allowed by all guardrails are available)
* **Zero Data Retention**: OR logic (if any guardrail enforces ZDR, it is enforced)
* **Budget limits**: Each guardrail's budget is checked independently. See [Budget Enforcement](#budget-enforcement) for details.

This means stricter rules always win when multiple guardrails apply. For example, if a member guardrail allows providers A, B, and C, but an API key guardrail only allows providers A and B, only providers A and B will be available for that key.

## Eligibility Preview

When viewing a guardrail, you can see an eligibility preview that shows which providers and models are available with that guardrail combined with your account settings. This helps you understand the effective restrictions before assigning the guardrail.

## Budget Enforcement

Guardrail budgets are enforced per-user and per-key, not shared across all users with that guardrail. When an API key makes a request, its usage counts toward both the key's budget and the owning member's budget.

**Example 1: Member guardrail with \$50/day limit**

You assign a guardrail with a \$50/day budget to three team members: Alice, Bob, and Carol. Each member gets their own \$50/day allowance. If Alice spends \$50, she is blocked, but Bob and Carol can still spend up to \$50 each.

**Example 2: API key usage accumulates to member usage**

Alice creates two API keys, both assigned a guardrail with a \$20/day limit. Key A spends \$15 and Key B spends \$10. Each key is within its own \$20 limit, but Alice's total member usage is \$25. If Alice also has a member guardrail with a \$20/day limit, her requests would be blocked because her combined usage (\$25) exceeds the member limit (\$20).

**Example 3: Layered guardrails**

Bob has a member guardrail with a \$100/day limit. His API key has a separate guardrail with a \$30/day limit. The key can only spend \$30/day (its own limit), but Bob's total usage across all his keys cannot exceed \$100/day. Both limits are checked independently on each request.

## API Access

You can manage guardrails programmatically using the OpenRouter API. This allows you to create, update, delete, and assign guardrails to API keys and organization members directly from your code.

See the [Guardrails API reference](/docs/api/api-reference/guardrails/list-guardrails) for available endpoints and usage examples.
***

title: Latency and Performance
subtitle: Understanding OpenRouter's performance characteristics
headline: Latency and Performance | Minimizing Gateway Latency
canonical-url: '[https://openrouter.ai/docs/guides/best-practices/latency-and-performance](https://openrouter.ai/docs/guides/best-practices/latency-and-performance)'
'og:site\_name': OpenRouter Documentation
'og:title': Latency and Performance | Minimizing Gateway Latency
'og:description': >-
Learn about OpenRouter's performance characteristics, latency optimizations,
and best practices for achieving optimal response times.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Latency%20and%20Performance\&description=Understanding%20OpenRouter's%20performance%20characteristics](https://openrouter.ai/dynamic-og?title=Latency%20and%20Performance\&description=Understanding%20OpenRouter's%20performance%20characteristics)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

OpenRouter is designed with performance as a top priority. OpenRouter is heavily optimized to add as little latency as possible to your requests.

## Minimal Overhead

OpenRouter is designed to add minimal latency to your requests. This is achieved through:

* Edge computing using Cloudflare Workers to stay as close as possible to your application
* Efficient caching of user and API key data at the edge
* Optimized routing logic that minimizes processing time

## Performance Considerations

### Cache Warming

When OpenRouter's edge caches are cold (typically during the first 1-2 minutes of operation in a new region), you may experience slightly higher latency as the caches warm up. This normalizes once the caches are populated.

### Credit Balance Checks

To maintain accurate billing and prevent overages, OpenRouter performs additional database checks when:

* A user's credit balance is low (single digit dollars)
* An API key is approaching its configured credit limit

OpenRouter expires caches more aggressively under these conditions to ensure proper billing, which increases latency until additional credits are added.

### Model Fallback

When using [model routing](/docs/routing/auto-model-selection) or [provider routing](/docs/features/provider-routing), if the primary model or provider fails, OpenRouter will automatically try the next option. A failed initial completion unsurprisingly adds latency to the specific request. OpenRouter tracks provider failures, and will attempt to intelligently route around unavailable providers so that this latency is not incurred on every request.

## Best Practices

To achieve optimal performance with OpenRouter:

1. **Maintain Healthy Credit Balance**
   * Set up auto-topup with a higher threshold and amount
   * This helps avoid forced credit checks and reduces the risk of hitting zero balance
   * Recommended minimum balance: \$10-20 to ensure smooth operation

2. **Use Provider Preferences**
   * If you have specific latency requirements (whether time to first token, or time to last), there are [provider routing](/docs/features/provider-routing) features to help you achieve your performance and cost goals.
***

title: Prompt Caching
subtitle: Cache prompt messages
headline: Prompt Caching | Reduce AI Model Costs with OpenRouter
canonical-url: '[https://openrouter.ai/docs/guides/best-practices/prompt-caching](https://openrouter.ai/docs/guides/best-practices/prompt-caching)'
'og:site\_name': OpenRouter Documentation
'og:title': Prompt Caching - Optimize AI Model Costs with Smart Caching
'og:description': >-
Reduce your AI model costs with OpenRouter's prompt caching feature. Learn how
to cache and reuse responses across OpenAI, Anthropic Claude, and DeepSeek
models.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Prompt%20Caching\&description=Optimize%20AI%20model%20costs%20with%20OpenRouter](https://openrouter.ai/dynamic-og?title=Prompt%20Caching\&description=Optimize%20AI%20model%20costs%20with%20OpenRouter)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

To save on inference costs, you can enable prompt caching on supported providers and models.

Most providers automatically enable prompt caching, but note that some (see Anthropic below) require you to enable it on a per-message basis.

When using caching (whether automatically in supported models, or via the `cache_control` property), OpenRouter uses provider sticky routing to maximize cache hits — see [Provider Sticky Routing](#provider-sticky-routing) below for details.

## Provider Sticky Routing

To maximize cache hit rates, OpenRouter uses **provider sticky routing** to route your subsequent requests to the same provider endpoint after a cached request. This works automatically with both implicit caching (e.g. OpenAI, DeepSeek, Gemini 2.5) and explicit caching (e.g. Anthropic `cache_control` breakpoints).

**How it works:**

* After a request that uses prompt caching, OpenRouter remembers which provider served your request.
* Subsequent requests for the same model are routed to the same provider, keeping your cache warm.
* Sticky routing only activates when the provider's cache read pricing is cheaper than regular prompt pricing, ensuring you always benefit from cost savings.
* If the sticky provider becomes unavailable, OpenRouter automatically falls back to the next-best provider.
* Sticky routing is not used when you specify a manual [provider order](/docs/api-reference/provider-preferences) via `provider.order` — in that case, your explicit ordering takes priority.

**Sticky routing granularity:**

Sticky routing is tracked at the account level, per model, and per conversation. OpenRouter identifies conversations by hashing the first system (or developer) message and the first non-system message in each request, so requests that share the same opening messages are routed to the same provider. This means different conversations naturally stick to different providers, improving load-balancing and throughput while keeping caches warm within each conversation.

## Inspecting cache usage

To see how much caching saved on each generation, you can:

1. Click the detail button on the [Activity](/activity) page
2. Use the `/api/v1/generation` API, [documented here](/docs/api/api-reference/generations/get-generation)
3. Check the `prompt_tokens_details` object in the [usage response](/docs/guides/guides/usage-accounting) included with every API response

The `cache_discount` field in the response body will tell you how much the response saved on cache usage. Some providers, like Anthropic, will have a negative discount on cache writes, but a positive discount (which reduces total cost) on cache reads.

### Usage object fields

The usage object in API responses includes detailed cache metrics in the `prompt_tokens_details` field:

```json
{
  "usage": {
    "prompt_tokens": 10339,
    "completion_tokens": 60,
    "total_tokens": 10399,
    "prompt_tokens_details": {
      "cached_tokens": 10318,
      "cache_write_tokens": 0
    }
  }
}
```

The key fields are:

* `cached_tokens`: Number of tokens read from the cache (cache hit). When this is greater than zero, you're benefiting from cached content.
* `cache_write_tokens`: Number of tokens written to the cache. This appears on the first request when establishing a new cache entry.

## OpenAI

Caching price changes:

* **Cache writes**: no cost
* **Cache reads**: (depending on the model) charged at 0.25x or 0.50x the price of the original input pricing

[Click here to view OpenAI's cache pricing per model.](https://platform.openai.com/docs/pricing)

Prompt caching with OpenAI is automated and does not require any additional configuration. There is a minimum prompt size of 1024 tokens.

[Click here to read more about OpenAI prompt caching and its limitation.](https://platform.openai.com/docs/guides/prompt-caching)

## Grok

Caching price changes:

* **Cache writes**: no cost
* **Cache reads**: charged at {GROK_CACHE_READ_MULTIPLIER}x the price of the original input pricing

[Click here to view Grok's cache pricing per model.](https://docs.x.ai/docs/models#models-and-pricing)

Prompt caching with Grok is automated and does not require any additional configuration.

## Moonshot AI

Caching price changes:

* **Cache writes**: no cost
* **Cache reads**: charged at {MOONSHOT_CACHE_READ_MULTIPLIER}x the price of the original input pricing

Prompt caching with Moonshot AI is automated and does not require any additional configuration.

## Groq

Caching price changes:

* **Cache writes**: no cost
* **Cache reads**: charged at {GROQ_CACHE_READ_MULTIPLIER}x the price of the original input pricing

Prompt caching with Groq is automated and does not require any additional configuration. Currently available on Kimi K2 models.

[Click here to view Groq's documentation.](https://console.groq.com/docs/prompt-caching)

## Anthropic Claude

Caching price changes:

* **Cache writes (5-minute TTL)**: charged at {ANTHROPIC_CACHE_WRITE_MULTIPLIER}x the price of the original input pricing
* **Cache writes (1-hour TTL)**: charged at 2x the price of the original input pricing
* **Cache reads**: charged at {ANTHROPIC_CACHE_READ_MULTIPLIER}x the price of the original input pricing

Prompt caching with Anthropic requires the use of `cache_control` breakpoints. There is a limit of four breakpoints. By default, the cache expires after 5 minutes, but you can extend this to 1 hour by specifying `"ttl": "1h"` in the `cache_control` object. It is recommended to reserve the cache breakpoints for large bodies of text, such as character cards, CSV data, RAG data, book chapters, etc.

[Click here to read more about Anthropic prompt caching and its limitation.](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)

The `cache_control` breakpoint can only be inserted into the text part of a multipart message.

### Supported models

The following Claude models support prompt caching:

* Claude Opus 4.5
* Claude Opus 4.1
* Claude Opus 4
* Claude Sonnet 4.5
* Claude Sonnet 4
* Claude Haiku 4.5
* Claude Haiku 3.5

### Minimum token requirements

Each model has a minimum cacheable prompt length:

* **4096 tokens**: Claude Opus 4.5, Claude Haiku 4.5
* **1024 tokens**: Claude Opus 4.1, Claude Opus 4, Claude Sonnet 4.5, Claude Sonnet 4

Prompts shorter than these minimums will not be cached.

### Cache TTL Options

OpenRouter supports two cache TTL values for Anthropic:

* **5 minutes** (default): `"cache_control": { "type": "ephemeral" }`
* **1 hour**: `"cache_control": { "type": "ephemeral", "ttl": "1h" }`

The 1-hour TTL is useful for longer sessions where you want to maintain cached content across multiple requests without incurring repeated cache write costs. The 1-hour TTL costs more for cache writes (2x base input price vs 1.25x for 5-minute TTL) but can save money over extended sessions by avoiding repeated cache writes. The 1-hour TTL is supported across all Claude 4.5 model providers (Anthropic, Amazon Bedrock, and Google Vertex AI).

### Examples

System message caching example (default 5-minute TTL):

```json
{
  "messages": [
    {
      "role": "system",
      "content": [
        {
          "type": "text",
          "text": "You are a historian studying the fall of the Roman Empire. You know the following book very well:"
        },
        {
          "type": "text",
          "text": "HUGE TEXT BODY",
          "cache_control": {
            "type": "ephemeral"
          }
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "What triggered the collapse?"
        }
      ]
    }
  ]
}
```

User message caching example with 1-hour TTL:

```json
{
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Given the book below:"
        },
        {
          "type": "text",
          "text": "HUGE TEXT BODY",
          "cache_control": {
            "type": "ephemeral",
            "ttl": "1h"
          }
        },
        {
          "type": "text",
          "text": "Name all the characters in the above book"
        }
      ]
    }
  ]
}
```

## DeepSeek

Caching price changes:

* **Cache writes**: charged at the same price as the original input pricing
* **Cache reads**: charged at {DEEPSEEK_CACHE_READ_MULTIPLIER}x the price of the original input pricing

Prompt caching with DeepSeek is automated and does not require any additional configuration.

## Google Gemini

### Implicit Caching

Gemini 2.5 Pro and 2.5 Flash models now support **implicit caching**, providing automatic caching functionality similar to OpenAI’s automatic caching. Implicit caching works seamlessly — no manual setup or additional `cache_control` breakpoints required.

Pricing Changes:

* No cache write or storage costs.
* Cached tokens are charged at {GOOGLE_CACHE_READ_MULTIPLIER}x the original input token cost.

Note that the TTL is on average 3-5 minutes, but will vary. There is a minimum of {GOOGLE_CACHE_MIN_TOKENS_2_5_FLASH} tokens for Gemini 2.5 Flash, and {GOOGLE_CACHE_MIN_TOKENS_2_5_PRO} tokens for Gemini 2.5 Pro for requests to be eligible for caching.

[Official announcement from Google](https://developers.googleblog.com/en/gemini-2-5-models-now-support-implicit-caching/)

<Tip>
  To maximize implicit cache hits, keep the initial portion of your message
  arrays consistent between requests. Push variations (such as user questions or
  dynamic context elements) toward the end of your prompt/requests.
</Tip>

### Pricing Changes for Cached Requests:

* **Cache Writes:** Charged at the input token cost plus 5 minutes of cache storage, calculated as follows:

```
Cache write cost = Input token price + (Cache storage price × (5 minutes / 60 minutes))
```

* **Cache Reads:** Charged at {GOOGLE_CACHE_READ_MULTIPLIER}× the original input token cost.

### Supported Models and Limitations:

Only certain Gemini models support caching. Please consult Google's [Gemini API Pricing Documentation](https://ai.google.dev/gemini-api/docs/pricing) for the most current details.

Cache Writes have a 5 minute Time-to-Live (TTL) that does not update. After 5 minutes, the cache expires and a new cache must be written.

Gemini models have typically have a 4096 token minimum for cache write to occur. Cached tokens count towards the model's maximum token usage. Gemini 2.5 Pro has a minimum of {GOOGLE_CACHE_MIN_TOKENS_2_5_PRO} tokens, and Gemini 2.5 Flash has a minimum of {GOOGLE_CACHE_MIN_TOKENS_2_5_FLASH} tokens.

### How Gemini Prompt Caching works on OpenRouter:

OpenRouter simplifies Gemini cache management, abstracting away complexities:

* You **do not** need to manually create, update, or delete caches.
* You **do not** need to manage cache names or TTL explicitly.

### How to Enable Gemini Prompt Caching:

Gemini caching in OpenRouter requires you to insert `cache_control` breakpoints explicitly within message content, similar to Anthropic. We recommend using caching primarily for large content pieces (such as CSV files, lengthy character cards, retrieval augmented generation (RAG) data, or extensive textual sources).

<Tip>
  There is not a limit on the number of `cache_control` breakpoints you can
  include in your request. OpenRouter will use only the last breakpoint for
  Gemini caching. Including multiple breakpoints is safe and can help maintain
  compatibility with Anthropic, but only the final one will be used for Gemini.
</Tip>

### Examples:

#### System Message Caching Example

```json
{
  "messages": [
    {
      "role": "system",
      "content": [
        {
          "type": "text",
          "text": "You are a historian studying the fall of the Roman Empire. Below is an extensive reference book:"
        },
        {
          "type": "text",
          "text": "HUGE TEXT BODY HERE",
          "cache_control": {
            "type": "ephemeral"
          }
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "What triggered the collapse?"
        }
      ]
    }
  ]
}
```

#### User Message Caching Example

```json
{
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Based on the book text below:"
        },
        {
          "type": "text",
          "text": "HUGE TEXT BODY HERE",
          "cache_control": {
            "type": "ephemeral"
          }
        },
        {
          "type": "text",
          "text": "List all main characters mentioned in the text above."
        }
      ]
    }
  ]
}
```
***

title: Uptime Optimization
subtitle: OpenRouter tracks provider availability
headline: Uptime Optimization | Maximize AI Model Availability
canonical-url: '[https://openrouter.ai/docs/guides/best-practices/uptime-optimization](https://openrouter.ai/docs/guides/best-practices/uptime-optimization)'
'og:site\_name': OpenRouter Documentation
'og:title': Uptime Optimization - Ensure Reliable AI Model Access
'og:description': >-
Learn how OpenRouter maximizes AI model uptime through real-time monitoring,
intelligent routing, and automatic fallbacks across multiple providers.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Uptime%20Optimization\&description=Maximize%20AI%20model%20availability](https://openrouter.ai/dynamic-og?title=Uptime%20Optimization\&description=Maximize%20AI%20model%20availability)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

OpenRouter continuously monitors the health and availability of AI providers to ensure maximum uptime for your applications. We track response times, error rates, and availability across all providers in real-time, and route based on this feedback.

## How It Works

OpenRouter tracks response times, error rates, and availability across all providers in real-time. This data helps us make intelligent routing decisions and provides transparency about service reliability.

## Uptime Example: Claude 4 Sonnet

<UptimeChart permaslug="anthropic/claude-4-sonnet-20250522" />

## Uptime Example: Llama 3.3 70B Instruct

<UptimeChart permaslug="meta-llama/llama-3.3-70b-instruct" />

## Customizing Provider Selection

While our smart routing helps maintain high availability, you can also customize provider selection using request parameters. This gives you control over which providers handle your requests while still benefiting from automatic fallback when needed.

Learn more about customizing provider selection in our [Provider Routing documentation](/docs/features/provider-routing).
***

title: Reasoning Tokens
headline: Reasoning Tokens | Enhanced AI Model Reasoning with OpenRouter
canonical-url: '[https://openrouter.ai/docs/guides/best-practices/reasoning-tokens](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)'
'og:site\_name': OpenRouter Documentation
'og:title': Reasoning Tokens - Improve AI Model Decision Making
'og:description': >-
Learn how to use reasoning tokens to enhance AI model outputs. Implement
step-by-step reasoning traces for better decision making and transparency.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Reasoning%20Tokens\&description=Enhance%20AI%20model%20outputs%20with%20OpenRouter](https://openrouter.ai/dynamic-og?title=Reasoning%20Tokens\&description=Enhance%20AI%20model%20outputs%20with%20OpenRouter)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

For models that support it, the OpenRouter API can return **Reasoning Tokens**, also known as thinking tokens. OpenRouter normalizes the different ways of customizing the amount of reasoning tokens that the model will use, providing a unified interface across different providers.

Reasoning tokens provide a transparent look into the reasoning steps taken by a model. Reasoning tokens are considered output tokens and charged accordingly.

Reasoning tokens are included in the response by default if the model decides to output them. Reasoning tokens will appear in the `reasoning` field of each message, unless you decide to exclude them.

<Note title="Some reasoning models do not return their reasoning tokens">
  While most models and providers make reasoning tokens available in the
  response, some (like the OpenAI o-series) do not.
</Note>

## Controlling Reasoning Tokens

You can control reasoning tokens in your requests using the `reasoning` parameter:

```json
{
  "model": "your-model",
  "messages": [],
  "reasoning": {
    // One of the following (not both):
    "effort": "high", // Can be "xhigh", "high", "medium", "low", "minimal" or "none" (OpenAI-style)
    "max_tokens": 2000, // Specific token limit (Anthropic-style)

    // Optional: Default is false. All models support this.
    "exclude": false, // Set to true to exclude reasoning tokens from response

    // Or enable reasoning with the default parameters:
    "enabled": true // Default: inferred from `effort` or `max_tokens`
  }
}
```

The `reasoning` config object consolidates settings for controlling reasoning strength across different models. See the Note for each option below to see which models are supported and how other models will behave.

### Max Tokens for Reasoning

<Note title="Supported models">
  Currently supported by:

  <ul>
    <li>
      Gemini thinking models
    </li>

    <li>
      Anthropic reasoning models (by using the <code>reasoning.max\_tokens</code>{' '}
      parameter)
    </li>

    <li>
      Some Alibaba Qwen thinking models (mapped to 

      <code>thinking_budget</code>

      )
    </li>
  </ul>

  For Alibaba, support varies by model — please check the individual model descriptions to confirm
  whether <code>reasoning.max\_tokens</code> (via <code>thinking\_budget</code>) is available.
</Note>

For models that support reasoning token allocation, you can control it like this:

* `"max_tokens": 2000` - Directly specifies the maximum number of tokens to use for reasoning

For models that only support `reasoning.effort` (see below), the `max_tokens` value will be used to determine the effort level.

### Reasoning Effort Level

<Note title="Supported models">
  Currently supported by OpenAI reasoning models (o1 series, o3 series, GPT-5 series) and Grok models
</Note>

* `"effort": "xhigh"` - Allocates the largest portion of tokens for reasoning (approximately 95% of max\_tokens)
* `"effort": "high"` - Allocates a large portion of tokens for reasoning (approximately 80% of max\_tokens)
* `"effort": "medium"` - Allocates a moderate portion of tokens (approximately 50% of max\_tokens)
* `"effort": "low"` - Allocates a smaller portion of tokens (approximately 20% of max\_tokens)
* `"effort": "minimal"` - Allocates an even smaller portion of tokens (approximately 10% of max\_tokens)
* `"effort": "none"` - Disables reasoning entirely

For models that only support `reasoning.max_tokens`, the effort level will be set based on the percentages above.

### Excluding Reasoning Tokens

If you want the model to use reasoning internally but not include it in the response:

* `"exclude": true` - The model will still use reasoning, but it won't be returned in the response

Reasoning tokens will appear in the `reasoning` field of each message.

### Enable Reasoning with Default Config

To enable reasoning with the default parameters:

* `"enabled": true` - Enables reasoning at the "medium" effort level with no exclusions.

### Examples

#### Basic Usage with Reasoning Tokens

<Template
  data={{
  API_KEY_REF,
  MODEL: "openai/o3-mini"
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    import { OpenRouter } from '@openrouter/sdk';

    const openRouter = new OpenRouter({
      apiKey: '{{API_KEY_REF}}',
    });

    const response = await openRouter.chat.send({
      model: '{{MODEL}}',
      messages: [
        {
          role: 'user',
          content: "How would you build the world's tallest skyscraper?",
        },
      ],
      reasoning: {
        effort: 'high',
      },
      stream: false,
    });

    console.log('REASONING:', response.choices[0].message.reasoning);
    console.log('CONTENT:', response.choices[0].message.content);
    ```

    ```python title="Python (OpenAI SDK)"
    from openai import OpenAI

    client = OpenAI(
        base_url="https://openrouter.ai/api/v1",
        api_key="{{API_KEY_REF}}",
    )

    response = client.chat.completions.create(
        model="{{MODEL}}",
        messages=[
            {"role": "user", "content": "How would you build the world's tallest skyscraper?"}
        ],
        extra_body={
            "reasoning": {
                "effort": "high"
            }
        },
    )

    msg = response.choices[0].message
    print(getattr(msg, "reasoning", None))
    ```

    ```typescript title="TypeScript (OpenAI SDK)"
    import OpenAI from 'openai';

    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: '{{API_KEY_REF}}',
    });

    async function getResponseWithReasoning() {
      const response = await openai.chat.completions.create({
        model: '{{MODEL}}',
        messages: [
          {
            role: 'user',
            content: "How would you build the world's tallest skyscraper?",
          },
        ],
        reasoning: {
          effort: 'high',
        },
      });

      type ORChatMessage = (typeof response)['choices'][number]['message'] & {
        reasoning?: string;
        reasoning_details?: unknown;
      };

      const msg = response.choices[0].message as ORChatMessage;
      console.log('REASONING:', msg.reasoning);
      console.log('CONTENT:', msg.content);
    }

    getResponseWithReasoning();
    ```
  </CodeGroup>
</Template>

#### Using Max Tokens for Reasoning

For models that support direct token allocation (like Anthropic models), you can specify the exact number of tokens to use for reasoning:

<Template
  data={{
  API_KEY_REF,
  MODEL: "anthropic/claude-sonnet-4.5"
}}
>
  <CodeGroup>
    ```python Python
    from openai import OpenAI

    client = OpenAI(
        base_url="https://openrouter.ai/api/v1",
        api_key="{{API_KEY_REF}}",
    )

    response = client.chat.completions.create(
        model="{{MODEL}}",
        messages=[
            {"role": "user", "content": "What's the most efficient algorithm for sorting a large dataset?"}
        ],
        extra_body={
            "reasoning": {
                "max_tokens": 2000
            }
        },
    )

    msg = response.choices[0].message
    print(getattr(msg, "reasoning", None))
    print(getattr(msg, "content", None))
    ```

    ```typescript TypeScript
    import OpenAI from 'openai';

    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: '{{API_KEY_REF}}',
    });

    async function getResponseWithReasoning() {
      const response = await openai.chat.completions.create({
        model: '{{MODEL}}',
        messages: [
          {
            role: 'user',
            content: "How would you build the world's tallest skyscraper?",
          },
        ],
        reasoning: {
          max_tokens: 2000,
        },
      });

      type ORChatMessage = (typeof response)['choices'][number]['message'] & {
        reasoning?: string;
      };
      const msg = response.choices[0].message as ORChatMessage;

      console.log('REASONING:', msg.reasoning);
      console.log('CONTENT:', msg.content);
    }

    getResponseWithReasoning();
    ```
  </CodeGroup>
</Template>

#### Excluding Reasoning Tokens from Response

If you want the model to use reasoning internally but not include it in the response:

<Template
  data={{
  API_KEY_REF,
  MODEL: "deepseek/deepseek-r1"
}}
>
  <CodeGroup>
    ```python Python
    from openai import OpenAI

    client = OpenAI(
        base_url="https://openrouter.ai/api/v1",
        api_key="{{API_KEY_REF}}",
    )

    response = client.chat.completions.create(
        model="{{MODEL}}",
        messages=[
            {"role": "user", "content": "Explain quantum computing in simple terms."}
        ],
        extra_body={
            "reasoning": {
                "effort": "high",
                "exclude": True
            }
        },
    )

    msg = response.choices[0].message
    print(getattr(msg, "content", None))
    ```

    ```typescript TypeScript
    import OpenAI from 'openai';

    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: '{{API_KEY_REF}}',
    });

    async function getResponseWithReasoning() {
      const response = await openai.chat.completions.create({
        model: '{{MODEL}}',
        messages: [
          {
            role: 'user',
            content: "How would you build the world's tallest skyscraper?",
          },
        ],
        reasoning: {
          effort: 'high',
          exclude: true,
        },
      });

      const msg = response.choices[0].message as {
        content?: string | null;
      };
      console.log('CONTENT:', msg.content);
    }

    getResponseWithReasoning();
    ```
  </CodeGroup>
</Template>

#### Advanced Usage: Reasoning Chain-of-Thought

This example shows how to use reasoning tokens in a more complex workflow. It injects one model's reasoning into another model to improve its response quality:

<Template
  data={{
  API_KEY_REF,
}}
>
  <CodeGroup>
    ```python Python
    from openai import OpenAI

    client = OpenAI(
        base_url="https://openrouter.ai/api/v1",
        api_key="{{API_KEY_REF}}",
    )

    question = "Which is bigger: 9.11 or 9.9?"

    def do_req(model: str, content: str, reasoning_config: dict | None = None):
        payload = {
            "model": model,
            "messages": [{"role": "user", "content": content}],
            "stop": "</think>",
        }
        if reasoning_config:
            payload.update(reasoning_config)
        return client.chat.completions.create(**payload)

    # Get reasoning from a capable model
    content = f"{question} Please think this through, but don't output an answer"
    reasoning_response = do_req("deepseek/deepseek-r1", content)
    reasoning = getattr(reasoning_response.choices[0].message, "reasoning", "")

    # Let's test! Here's the naive response:
    simple_response = do_req("openai/gpt-4o-mini", question)
    print(getattr(simple_response.choices[0].message, "content", None))

    # Here's the response with the reasoning token injected:
    content = f"{question}. Here is some context to help you: {reasoning}"
    smart_response = do_req("openai/gpt-4o-mini", content)
    print(getattr(smart_response.choices[0].message, "content", None))
    ```

    ```typescript TypeScript
    import OpenAI from 'openai';

    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: '{{API_KEY_REF}}',
    });

    async function doReq(model, content, reasoningConfig) {
      const payload = {
        model,
        messages: [{ role: 'user', content }],
        stop: '</think>',
        ...reasoningConfig,
      };

      return openai.chat.completions.create(payload);
    }

    async function getResponseWithReasoning() {
      const question = 'Which is bigger: 9.11 or 9.9?';
      const reasoningResponse = await doReq(
        'deepseek/deepseek-r1',
        `${question} Please think this through, but don't output an answer`,
      );
      const reasoning = reasoningResponse.choices[0].message.reasoning;

      // Let's test! Here's the naive response:
      const simpleResponse = await doReq('openai/gpt-4o-mini', question);
      console.log(simpleResponse.choices[0].message.content);

      // Here's the response with the reasoning token injected:
      const content = `${question}. Here is some context to help you: ${reasoning}`;
      const smartResponse = await doReq('openai/gpt-4o-mini', content);
      console.log(smartResponse.choices[0].message.content);
    }

    getResponseWithReasoning();
    ```
  </CodeGroup>
</Template>

## Preserving Reasoning

To preserve reasoning context across multiple turns, you can pass it back to the API in one of two ways:

1. **`message.reasoning`** (string): Pass the plaintext reasoning as a string field on the assistant message
2. **`message.reasoning_details`** (array): Pass the full reasoning\_details block

Use `reasoning_details` when working with models that return special reasoning types (such as encrypted or summarized) - this preserves the full structure needed for those models.

For models that only return raw reasoning strings, you can use the simpler `reasoning` field. You can also use `reasoning_content` as an alias - it functions identically to `reasoning`.

<Note title="Model Support">
  Preserving reasoning is currently supported by these proprietary models:

  <ul>
    <li>
      All OpenAI reasoning models (o1 series, o3 series, GPT-5 series and newer)
    </li>

    <li>
      All Anthropic reasoning models (Claude 3.7 series and newer)
    </li>

    <li>
      All Gemini Reasoning models
    </li>

    <li>
      All xAI reasoning models
    </li>
  </ul>

  And these open source models:

  <ul>
    <li>
      MiniMax M2 / M2.1
    </li>

    <li>
      Kimi K2 Thinking / K2.5
    </li>

    <li>
      INTELLECT-3
    </li>

    <li>
      Nemotron 3 Nano
    </li>

    <li>
      MiMo-V2-Flash
    </li>

    <li>
      All Z.ai reasoning models (GLM 4.5 series and newer)
    </li>
  </ul>

  Note: standard interleaved thinking only. The <a href="https://docs.z.ai/guides/capabilities/thinking-mode#preserved-thinking">preserved thinking</a> feature for Z.ai models is currently not supported.
</Note>

The `reasoning_details` functionality works identically across all supported reasoning models. You can easily switch between OpenAI reasoning models (like `openai/gpt-5.2`) and Anthropic reasoning models (like `anthropic/claude-sonnet-4.5`) without changing your code structure.

Preserving reasoning blocks is useful specifically for tool calling. When models like Claude invoke tools, it is pausing its construction of a response to await external information. When tool results are returned, the model will continue building that existing response. This necessitates preserving reasoning blocks during tool use, for a couple of reasons:

**Reasoning continuity**: The reasoning blocks capture the model's step-by-step reasoning that led to tool requests. When you post tool results, including the original reasoning ensures the model can continue its reasoning from where it left off.

**Context maintenance**: While tool results appear as user messages in the API structure, they're part of a continuous reasoning flow. Preserving reasoning blocks maintains this conceptual flow across multiple API calls.

<Note title="Important for Reasoning Models">
  When providing reasoning\_details blocks, the entire sequence of consecutive
  reasoning blocks must match the outputs generated by the model during the
  original request; you cannot rearrange or modify the sequence of these blocks.
</Note>

### Example: Preserving Reasoning Blocks with OpenRouter and Claude

<Template
  data={{
  API_KEY_REF,
  MODEL: 'anthropic/claude-sonnet-4.5'
}}
>
  <CodeGroup>
    ```python
    from openai import OpenAI

    client = OpenAI(
        base_url="https://openrouter.ai/api/v1",
        api_key="{{API_KEY_REF}}",
    )

    # Define tools once and reuse
    tools = [{
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current weather",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {"type": "string"}
                },
                "required": ["location"]
            }
        }
    }]

    # First API call with tools
    # Note: You can use 'openai/gpt-5.2' instead of 'anthropic/claude-sonnet-4.5' - they're completely interchangeable
    response = client.chat.completions.create(
        model="{{MODEL}}",
        messages=[
            {"role": "user", "content": "What's the weather like in Boston? Then recommend what to wear."}
        ],
        tools=tools,
        extra_body={"reasoning": {"max_tokens": 2000}}
    )

    # Extract the assistant message with reasoning_details
    message = response.choices[0].message

    # Preserve the complete reasoning_details when passing back
    messages = [
        {"role": "user", "content": "What's the weather like in Boston? Then recommend what to wear."},
        {
            "role": "assistant",
            "content": message.content,
            "tool_calls": message.tool_calls,
            "reasoning_details": message.reasoning_details  # Pass back unmodified
        },
        {
            "role": "tool",
            "tool_call_id": message.tool_calls[0].id,
            "content": '{"temperature": 45, "condition": "rainy", "humidity": 85}'
        }
    ]

    # Second API call - Claude continues reasoning from where it left off
    response2 = client.chat.completions.create(
        model="{{MODEL}}",
        messages=messages,  # Includes preserved thinking blocks
        tools=tools
    )
    ```

    ```typescript
    import OpenAI from 'openai';

    const client = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: '{{API_KEY_REF}}',
    });

    // Define tools once and reuse
    const tools = [
      {
        type: 'function',
        function: {
          name: 'get_weather',
          description: 'Get current weather',
          parameters: {
            type: 'object',
            properties: {
              location: { type: 'string' },
            },
            required: ['location'],
          },
        },
      },
    ] as const;

    // First API call with tools
    // Note: You can use 'openai/gpt-5.2' instead of 'anthropic/claude-sonnet-4.5' - they're completely interchangeable
    const response = await client.chat.completions.create({
      model: '{{MODEL}}',
      messages: [
        {
          role: 'user',
          content:
            "What's the weather like in Boston? Then recommend what to wear.",
        },
      ],
      tools,
      reasoning: { max_tokens: 2000 },
    });

    // Extract the assistant message with reasoning_details
    type ORChatMessage = (typeof response)['choices'][number]['message'] & {
      reasoning_details?: unknown;
    };
    const message = response.choices[0].message as ORChatMessage;

    // Preserve the complete reasoning_details when passing back
    const messages = [
      {
        role: 'user' as const,
        content: "What's the weather like in Boston? Then recommend what to wear.",
      },
      {
        role: 'assistant' as const,
        content: message.content,
        tool_calls: message.tool_calls,
        reasoning_details: message.reasoning_details, // Pass back unmodified
      },
      {
        role: 'tool' as const,
        tool_call_id: message.tool_calls?.[0]?.id,
        content: JSON.stringify({
          temperature: 45,
          condition: 'rainy',
          humidity: 85,
        }),
      },
    ];

    // Second API call - Claude continues reasoning from where it left off
    const response2 = await client.chat.completions.create({
      model: '{{MODEL}}',
      messages, // Includes preserved thinking blocks
      tools,
    });
    ```
  </CodeGroup>
</Template>

For more detailed information about thinking encryption, redacted blocks, and advanced use cases, see [Anthropic's documentation on extended thinking](https://docs.anthropic.com/en/docs/build-with-claude/tool-use#extended-thinking).

For more information about OpenAI reasoning models, see [OpenAI's reasoning documentation](https://platform.openai.com/docs/guides/reasoning#keeping-reasoning-items-in-context).

## Reasoning Details API Shape

When reasoning models generate responses, the reasoning information is structured in a standardized format through the `reasoning_details` array. This section documents the API response structure for reasoning details in both streaming and non-streaming responses.

### reasoning\_details Array Structure

The `reasoning_details` field contains an array of reasoning detail objects. Each object in the array represents a specific piece of reasoning information and follows one of three possible types. The location of this array differs between streaming and non-streaming responses.

* **Non-streaming responses**: `reasoning_details` appears in `choices[].message.reasoning_details`
* **Streaming responses**: `reasoning_details` appears in `choices[].delta.reasoning_details` for each chunk

#### Common Fields

All reasoning detail objects share these common fields:

* `id` (string | null): Unique identifier for the reasoning detail
* `format` (string): The format of the reasoning detail, with possible values:
  * `"unknown"` - Format is not specified
  * `"openai-responses-v1"` - OpenAI responses format version 1
  * `"azure-openai-responses-v1"` - Azure OpenAI responses format version 1
  * `"xai-responses-v1"` - xAI responses format version 1
  * `"anthropic-claude-v1"` - Anthropic Claude format version 1 (default)
  * `"google-gemini-v1"` - Google Gemini format version 1
* `index` (number, optional): Sequential index of the reasoning detail

#### Reasoning Detail Types

**1. Summary Type (`reasoning.summary`)**

Contains a high-level summary of the reasoning process:

```json
{
  "type": "reasoning.summary",
  "summary": "The model analyzed the problem by first identifying key constraints, then evaluating possible solutions...",
  "id": "reasoning-summary-1",
  "format": "anthropic-claude-v1",
  "index": 0
}
```

**2. Encrypted Type (`reasoning.encrypted`)**

Contains encrypted reasoning data that may be redacted or protected:

```json
{
  "type": "reasoning.encrypted",
  "data": "eyJlbmNyeXB0ZWQiOiJ0cnVlIiwiY29udGVudCI6IltSRURBQ1RFRF0ifQ==",
  "id": "reasoning-encrypted-1",
  "format": "anthropic-claude-v1",
  "index": 1
}
```

**3. Text Type (`reasoning.text`)**

Contains raw text reasoning with optional signature verification:

```json
{
  "type": "reasoning.text",
  "text": "Let me think through this step by step:\n1. First, I need to understand the user's question...",
  "signature": "sha256:abc123def456...",
  "id": "reasoning-text-1",
  "format": "anthropic-claude-v1",
  "index": 2
}
```

### Response Examples

#### Non-Streaming Response

In non-streaming responses, `reasoning_details` appears in the message:

```json
{
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "Based on my analysis, I recommend the following approach...",
        "reasoning_details": [
          {
            "type": "reasoning.summary",
            "summary": "Analyzed the problem by breaking it into components",
            "id": "reasoning-summary-1",
            "format": "anthropic-claude-v1",
            "index": 0
          },
          {
            "type": "reasoning.text",
            "text": "Let me work through this systematically:\n1. First consideration...\n2. Second consideration...",
            "signature": null,
            "id": "reasoning-text-1",
            "format": "anthropic-claude-v1",
            "index": 1
          }
        ]
      }
    }
  ]
}
```

#### Streaming Response

In streaming responses, `reasoning_details` appears in delta chunks as the reasoning is generated:

```json
{
  "choices": [
    {
      "delta": {
        "reasoning_details": [
          {
            "type": "reasoning.text",
            "text": "Let me think about this step by step...",
            "signature": null,
            "id": "reasoning-text-1",
            "format": "anthropic-claude-v1",
            "index": 0
          }
        ]
      }
    }
  ]
}
```

**Streaming Behavior Notes:**

* Each reasoning detail chunk is sent as it becomes available
* The `reasoning_details` array in each chunk may contain one or more reasoning objects
* For encrypted reasoning, the content may appear as `[REDACTED]` in streaming responses
* The complete reasoning sequence is built by concatenating all chunks in order

## Legacy Parameters

For backward compatibility, OpenRouter still supports the following legacy parameters:

* `include_reasoning: true` - Equivalent to `reasoning: {}`
* `include_reasoning: false` - Equivalent to `reasoning: { exclude: true }`

However, we recommend using the new unified `reasoning` parameter for better control and future compatibility.

## Provider-Specific Reasoning Implementation

### Anthropic Models with Reasoning Tokens

The latest Claude models, such as [anthropic/claude-3.7-sonnet](https://openrouter.ai/anthropic/claude-3.7-sonnet), support working with and returning reasoning tokens.

You can enable reasoning on Anthropic models **only** using the unified `reasoning` parameter with either `effort` or `max_tokens`.

**Note:** The `:thinking` variant is no longer supported for Anthropic models. Use the `reasoning` parameter instead.

#### Reasoning Max Tokens for Anthropic Models

When using Anthropic models with reasoning:

* When using the `reasoning.max_tokens` parameter, that value is used directly with a minimum of 1024 tokens.
* When using the `reasoning.effort` parameter, the budget\_tokens are calculated based on the `max_tokens` value.

The reasoning token allocation is capped at 128,000 tokens maximum and 1024 tokens minimum. The formula for calculating the budget\_tokens is: `budget_tokens = max(min(max_tokens * {effort_ratio}, 128000), 1024)`

effort\_ratio is 0.95 for xhigh effort, 0.8 for high effort, 0.5 for medium effort, 0.2 for low effort, and 0.1 for minimal effort.

**Important**: `max_tokens` must be strictly higher than the reasoning budget to ensure there are tokens available for the final response after thinking.

<Note title="Token Usage and Billing">
  Please note that reasoning tokens are counted as output tokens for billing
  purposes. Using reasoning tokens will increase your token usage but can
  significantly improve the quality of model responses.
</Note>

#### Example: Streaming with Anthropic Reasoning Tokens

<Template
  data={{
  API_KEY_REF,
  MODEL: "anthropic/claude-3.7-sonnet"
}}
>
  <CodeGroup>
    ```python Python
    from openai import OpenAI

    client = OpenAI(
        base_url="https://openrouter.ai/api/v1",
        api_key="{{API_KEY_REF}}",
    )

    def chat_completion_with_reasoning(messages):
        response = client.chat.completions.create(
            model="{{MODEL}}",
            messages=messages,
            max_tokens=10000,
            extra_body={
                "reasoning": {
                    "max_tokens": 8000
                }
            },
            stream=True
        )
        return response

    for chunk in chat_completion_with_reasoning([
        {"role": "user", "content": "What's bigger, 9.9 or 9.11?"}
    ]):
        if hasattr(chunk.choices[0].delta, 'reasoning_details') and chunk.choices[0].delta.reasoning_details:
            print(f"REASONING_DETAILS: {chunk.choices[0].delta.reasoning_details}")
        elif getattr(chunk.choices[0].delta, 'content', None):
            print(f"CONTENT: {chunk.choices[0].delta.content}")
    ```

    ```typescript TypeScript
    import OpenAI from 'openai';

    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: '{{API_KEY_REF}}',
    });

    async function chatCompletionWithReasoning(messages) {
      const response = await openai.chat.completions.create({
        model: '{{MODEL}}',
        messages,
        max_tokens: 10000,
        reasoning: {
          max_tokens: 8000,
        },
        stream: true,
      });

      return response;
    }

    (async () => {
      for await (const chunk of chatCompletionWithReasoning([
        { role: 'user', content: "What's bigger, 9.9 or 9.11?" },
      ])) {
        if (chunk.choices[0].delta?.reasoning_details) {
          console.log(`REASONING_DETAILS:`, chunk.choices[0].delta.reasoning_details);
        } else if (chunk.choices[0].delta?.content) {
          console.log(`CONTENT: ${chunk.choices[0].delta.content}`);
        }
      }
    })();
    ```
  </CodeGroup>
</Template>

### Google Gemini 3 Models with Thinking Levels

Gemini 3 models (such as [google/gemini-3-pro-preview](https://openrouter.ai/google/gemini-3-pro-preview) and [google/gemini-3-flash-preview](https://openrouter.ai/google/gemini-3-flash-preview)) use Google's `thinkingLevel` API instead of the older `thinkingBudget` API used by Gemini 2.5 models.

OpenRouter maps the `reasoning.effort` parameter directly to Google's `thinkingLevel` values:

| OpenRouter `reasoning.effort` | Google `thinkingLevel` |
| ----------------------------- | ---------------------- |
| `"minimal"`                   | `"minimal"`            |
| `"low"`                       | `"low"`                |
| `"medium"`                    | `"medium"`             |
| `"high"`                      | `"high"`               |
| `"xhigh"`                     | `"high"` (mapped down) |

<Note title="Token Consumption is Determined by Google">
  When using `thinkingLevel`, the actual number of reasoning tokens consumed is determined internally by Google. There are no publicly documented token limit breakpoints for each level. For example, setting `effort: "low"` might result in several hundred reasoning tokens depending on the complexity of the task. This is expected behavior and reflects how Google implements thinking levels internally.
</Note>

If a model doesn't support a specific effort level (for example, if a model only supports `low` and `high`), OpenRouter will map your requested effort to the nearest supported level.

#### Using max\_tokens with Gemini 3

If you specify `reasoning.max_tokens` explicitly, OpenRouter will pass it through as `thinkingBudget` to Google's API. However, for Gemini 3 models, Google internally maps this budget value to a `thinkingLevel`, so you will not get precise token control. The actual token consumption is still determined by Google's thinkingLevel implementation, not by the specific budget value you provide.

#### Example: Using Thinking Levels with Gemini 3

<Template
  data={{
  API_KEY_REF,
  MODEL: "google/gemini-3-pro-preview"
}}
>
  <CodeGroup>
    ```python Python
    from openai import OpenAI

    client = OpenAI(
        base_url="https://openrouter.ai/api/v1",
        api_key="{{API_KEY_REF}}",
    )

    response = client.chat.completions.create(
        model="{{MODEL}}",
        messages=[
            {"role": "user", "content": "Explain the implications of quantum entanglement."}
        ],
        extra_body={
            "reasoning": {
                "effort": "low"  # Maps to thinkingLevel: "low"
            }
        },
    )

    msg = response.choices[0].message
    print(getattr(msg, "reasoning", None))
    print(getattr(msg, "content", None))
    ```

    ```typescript TypeScript
    import OpenAI from 'openai';

    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: '{{API_KEY_REF}}',
    });

    async function getResponseWithThinkingLevel() {
      const response = await openai.chat.completions.create({
        model: '{{MODEL}}',
        messages: [
          {
            role: 'user',
            content: 'Explain the implications of quantum entanglement.',
          },
        ],
        reasoning: {
          effort: 'low', // Maps to thinkingLevel: "low"
        },
      });

      type ORChatMessage = (typeof response)['choices'][number]['message'] & {
        reasoning?: string;
      };
      const msg = response.choices[0].message as ORChatMessage;

      console.log('REASONING:', msg.reasoning);
      console.log('CONTENT:', msg.content);
    }

    getResponseWithThinkingLevel();
    ```
  </CodeGroup>
</Template>

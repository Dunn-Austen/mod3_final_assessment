import { startConversation, postMessage, endConversation } from './apiCalls';

describe('startConversation', () => {
  const mockFeeling = 'stressed';
  const mockResponse = {
    message: "Hi there, my name is Dr. Watson.  I understand tha…tressed.  What has been most stressful this week?"
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    const url = 'https://drwatson-api.herokuapp.com/api/v1/start_session';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ feeling: mockFeeling })
    };
    startConversation(mockFeeling);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should return a new response message (HAPPY)', () => {
    expect(startConversation(mockFeeling)).resolves.toEqual(mockResponse);
  });

  it('should return an error (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(startConversation(mockFeeling)).rejects.toEqual(Error('Dr Watson is currently down.  Please try again later.'))
  });

  it('should return an error if promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'))
    });

    expect(startConversation(mockFeeling)).rejects.toEqual(Error('fetch failed.'))
  });
});

describe('endConversation', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      });
    });
  });

  it('should call fetch with the correct url', () => {
    const url = 'https://drwatson-api.herokuapp.com/api/v1/end_session';
    endConversation();

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should resolve with no errors', () => {
    expect(endConversation()).resolves.toEqual(undefined)
  });

  it('should return an error (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(endConversation()).rejects.toEqual(Error('There was a problem ending the session.  Please close the application.'));
  });

  it('should return an error if promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'));
    });

    expect(endConversation()).rejects.toEqual(Error('fetch failed.'));
  });
});

describe('postMessage', () => {
  const mockPrompt = 'I\'m feeling sick';
  const mockResponse = {message: "This sounds like a difficult situation.  Have you tried reaching out to one of your instructors or Jun about this?"};

  it('should call fetch with the correct url', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    const url = 'https://drwatson-api.herokuapp.com/api/message';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newMessage: mockPrompt })
    };
    postMessage(mockPrompt);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should return a new response message if successful', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    expect(postMessage(mockPrompt)).resolves.toEqual(mockResponse);
  });

  it('should return a new and confused response message if prompt is successful but not intelligible', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve('I don\'t understand. You can try rephrasing.')
      });
    });
    expect(postMessage('ask;fhasdkjfadsf')).resolves.toEqual('I don\'t understand. You can try rephrasing.');
  });

  it('should return an error if unsuccessful', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(postMessage(mockPrompt)).rejects.toEqual(Error('Error posting message.'))
  });
});
